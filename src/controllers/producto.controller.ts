import { Request, Response } from "express"
import ProductoModel from "../models/producto.model";
import { CustomRequest } from "../middlewares/validate-jwt";


export const postProducto = async(req: CustomRequest, res:Response) =>{
    const {body}=req;
    const id = req._id;

    try {

        const newProducto = await new  ProductoModel({
            usuario: id,
            ...body
        })

        const productoCreado = await newProducto.save()

        res.status(200).json({
            ok: true,
            msg:"Producto creado satisfactoriamente",
            usuario: productoCreado
        })
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el producto, comuniquese con el administrador"
        })
        
    }
}



export const getProductos = async  (req: Request, res: Response) => {

    try {
        
        const productos = await ProductoModel.find();
        res.json({
            ok: true,
            productos
        })
    } catch (error) {
        
        res.status(400).json({
            ok:false,
            msg: "Error al consultar los productos"
        })
    }
}


export const getUnProducto = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        
        const producto = await ProductoModel.findById({_id: id});
        res.json({
            ok: true,
            producto
        })
    } catch (error) {
        
        res.status(400).json({
            ok:false,
            msg: "Error al consultar el producto"
        })
    }
}

export const updateProducto = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const {body} = req
        
        const updateProducto = await ProductoModel.findByIdAndUpdate(id, body, {new: true});

        res.json({
            ok: true,
            msg: "Producto actualizado",
            producto: updateProducto
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al actualizar el producto"
        })
    }
}

export const deleteUProducto = async  (req: Request, res: Response) => {

    try {
        const id = req.params.id
        
        const deleteProducto = await ProductoModel.findByIdAndDelete({_id: id});
        res.json({
            ok: true,
            producto: deleteProducto
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            ok:false,
            msg: "Error al eliminar el producto"
        })
    }
}



