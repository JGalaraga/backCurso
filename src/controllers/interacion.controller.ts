import { Request, Response } from "express"
import InteracionModel from "../models/interaccion.model";
import UsuarioModel from "../models/usuario.model";
import { CustomRequest } from "../middlewares/validate-jwt";


export const postInteracion = async(req: CustomRequest, res:Response) =>{
    const {body}=req;
    const id = req._id;
    //const idCliente = "664400bd633a2398bb4c9cb0"


    const cliente = await UsuarioModel.findOne();

    try {

        const newInteraccion = await new  InteracionModel({
            usuario: id,
            cliente: cliente,
            ...body
        })

        const interaccionCreada = await newInteraccion.save()

        res.status(200).json({
            ok: true,
            msg:"Interacion creada satisfactoriamente",
            interaccion: interaccionCreada
        })
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear la interaccion, comuniquese con el administrador"
        })
        
    }
}



export const getInteracciiones = async  (req: Request, res: Response) => {

    try {
        
        const interacciones = await InteracionModel.find();
        res.json({
            ok: true,
            interacciones
        })
    } catch (error) {
        
        res.status(400).json({
            ok:false,
            msg: "Error al consultar las interacciones"
        })
    }
}


export const updateInteraccion = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const {body} = req
        
        const updateInteraccion = await InteracionModel.findByIdAndUpdate(id, body, {new: true});

        res.json({
            ok: true,
            msg: "Interaccion actualizada",
            interacion: updateInteraccion
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al actualizar la interaccion"
        })
    }
}

export const deleteInteraccion = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        
        const deleteInteraccion = await InteracionModel.findByIdAndDelete({_id: id});
        res.json({
            ok: true,
            interacion: deleteInteraccion
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al eliminar la interacion"
        })
    }
}



