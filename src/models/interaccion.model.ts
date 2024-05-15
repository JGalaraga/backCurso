import { Model, Schema, Types, model } from "mongoose";


interface InteracionInterface {
    descripcion: string;
    fechaCreacion: Date;
    usuario: Types.ObjectId;
    cliente?: Types.ObjectId;
}



const InteracionSchema = new Schema<InteracionInterface>({
    descripcion:{
        type: String,
        required: true
    },

    fechaCreacion:{
        type: Date,
        default: Date.now()
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: false
    },

})

const InteracionModel: Model<any> = model<InteracionInterface>("interaciones", InteracionSchema)
export default InteracionModel;