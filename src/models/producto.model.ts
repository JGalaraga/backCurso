import { Model, Schema, model } from "mongoose";


const ProductoSchema = new Schema({
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
        type: Number
    },
    precio:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    
})

const ProductoModel: Model<any> = model("productos", ProductoSchema)
export default ProductoModel;