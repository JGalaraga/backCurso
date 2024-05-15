import { Model, Schema, Types, model } from "mongoose";

interface Distribuidor {
    nit: string;
    razonSocial: string;
    telefono: number;
    direccion: string;
}

interface Opiniones {
    comentarios: string;
    calificacion: string;
    fecha?: Date;
}


interface ProductoInterface {
    nombre: string;
    sku: string;
    cantidad: number;
    precio: number;
    distribuidor: Distribuidor;
    opiniones: Opiniones;
    usuario: Types.ObjectId;
    createdAt: Date;
    // createdAt:{
    //     type: Date,
    //     default: Date.now()
    // },
    

}



const ProductoSchema = new Schema<ProductoInterface>({
    nombre:{
        type: String,
        required: true
    },

    sku:{
        type: String,
        required: true,
        unique: true
    },
    cantidad: {
        type: Number,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
    },
    distribuidor: {
        type: Object,
        required: true
    },
    opiniones: {
        type: Object,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    }
})

const ProductoModel: Model<any> = model<ProductoInterface>("productos", ProductoSchema)
export default ProductoModel;