import { Request, Response } from "express"
import UsuarioModel from "../models/usuario.model";


export const postUsuario = async(req: Request, res:Response) =>{
    const {body}=req;

    try {

        const newUsuario = await new  UsuarioModel({
            ...body
        })

        const usuarioCreado = await newUsuario.save()

        res.status(200).json({
            ok: true,
            msg:"Usuario creado satisfactoriamente",
            usuario: usuarioCreado
        })
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el usuario, comuniquese con el administrador"
        })
        
    }
}

export const getUsuarios = async  (req: Request, res: Response) => {

    try {
        
        const usuarios = await UsuarioModel.find();
        res.json({
            ok: true,
            usuarios
        })
    } catch (error) {
        
        res.status(400).json({
            ok:false,
            msg: "Error al consultar los usuarios"
        })
    }
}


export const getUnUsuario = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        
        const usuario = await UsuarioModel.findById({_id: id});
        res.json({
            ok: true,
            usuario
        })
    } catch (error) {
        
        res.status(400).json({
            ok:false,
            msg: "Error al consultar el usuario"
        })
    }
}

export const updateUsuario = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const {body} = req
        
        const updateUsuario = await UsuarioModel.findByIdAndUpdate(id, body, {new: true});

        res.json({
            ok: true,
            msg: "Usuario actualizado",
            usuario: updateUsuario
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al actualizar el usuario"
        })
    }
}

export const deleteUsuario = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        
        const deleteUsuario = await UsuarioModel.findByIdAndDelete({_id: id});
        res.json({
            ok: true,
            usuario: deleteUsuario
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al eliminar el usuario"
        })
    }
}

