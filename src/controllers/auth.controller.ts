// 1. Solicitar datos email y contraseña
// 2. Validar Contraseña
// 3. Generar el Token
// 4. Login Exitoso

import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import generateJWT from "../helpers/jwt";
import { CustomRequest } from "../middlewares/validate-jwt";
import { sendEmail } from "../helpers/email";
import path from "path"
import fs from "fs"
import { obtenerUbicacionPorIP } from "../helpers/obtenerDireccionIp";
import { config } from "../config/config";
import UbicacionModel from "../models/ubicacionlp.model";
import { body } from "express-validator";

const environment = config[process.env.NODE_ENV || "desarrollo"]
export const login = async (req: Request, res: Response) => {
  //const ipAddress = req.ip || "207.90.194.2" "181.135.66.218"
  const ipAddress = environment.ip ||  req.ip 
  const { email, password } = req.body;


  try {
    // Verificar el email
    const usuario = await UsuarioModel.findOne({ email: email });

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son válidas",
      });
    }

    //Verificar el password
    const validarPassword = bcrypt.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son válidas",
      });
    }

    // Generar Token
    const token = await generateJWT(usuario._id, usuario.email);

    // console.log("req", req.ip)
    
    const ubicacionIp = await obtenerUbicacionPorIP(ipAddress)

  const ubicacion = new  UbicacionModel({
    usuario: usuario.id,
    ...ubicacionIp
  })

  const ubucacionGuardada = await ubicacion.save()


    res.status(200).json({
      ok: true,
      usuario,
      token,
      ubucacionGuardada
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
      msg: "Hable con el administrador",
    });
  }
};

export const olvidoContrasena = async (req: Request, resp: Response) =>{
  
  const {email, numeroDocumento} = req.body 
  
  try {
    const existeUsuario = await UsuarioModel.findOne({email,
      numeroDocumento})

      if(!existeUsuario){
        resp.status(400).json({
          ok:false,
          msg: "Los datos no coinciden"
        })
      }
      const id = existeUsuario?._id

      if(id){
        //Gerenar Token
        const token = await generateJWT(id, email, "1h", process.env.JWT_SECRET_PASS )

      //Guardar el Token en la db
      existeUsuario.token = token;
      await existeUsuario.save()

      const nombre = existeUsuario.nombre
      const  templatePath = path.join(
        __dirname,
        "../templates/olvidoContrasena.html"
        //El templates del src hay que moverlo al dist porque contiene un html y el no lo lleva al dist
      )
      const emailTemplate = fs.readFileSync(templatePath, "utf8")

      const personalizarEmail = emailTemplate
      .replace("{{name}}", nombre)
      .replace("{{token}}", existeUsuario.token)

      sendEmail("galaragajuan97@gmail.com", "Cambio de contraseña", `${personalizarEmail}`)

        resp.status(200).json({
          ok: true,
          msg: "Proceso éxistoso",
          usuario: existeUsuario,
        })
      }
  

    
  } catch (error) {

    console.error(error)
    resp.status(400).json({
      ok: false,
      msg: "No se logró validar sus datos"
    })
    
  }
}


export const cambioContrasena = async(req: CustomRequest, res: Response) =>{

  const id = req._id
  const {password} = req.body
  const tokenPass = req.header("x-token-pass") 

  try {
    
    if(!password || !tokenPass ){
      return res.status(400).json({
        ok: false,
        msg: "Valores invalidos"
      })
      
    }

    const usuario = await UsuarioModel.findOne({token: tokenPass})

    if(!usuario){
     return res.status(400).json({
        ok: false,
        msg: "El token ya fue utilizado"
      })
      
    }


    const newPassword = bcrypt.hashSync(password, 10)

    const actualizarPassword = await UsuarioModel.findByIdAndUpdate( id, { password: newPassword, token: ""}, {new: true})

    if(!actualizarPassword){
      return res.status(400).json({
        ok: false,
        msg: "Error al actualizar la contraseña"
      })
    }

    res.status(200).json({
      ok: true,
      msg: "Contraseña actualizada correctamente"
    })
  } catch (error) {
    
    console.error(error)
    return res.status(400).json({
      ok: false,
      msg: "Error al actualizar la contraseña, hable con el administrador"
    })
  }

}