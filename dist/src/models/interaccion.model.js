"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InteracionSchema = new mongoose_1.Schema({
    descripcion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "cliente",
        required: false
    },
});
const InteracionModel = (0, mongoose_1.model)("interaccion", InteracionSchema);
exports.default = InteracionModel;
//# sourceMappingURL=interaccion.model.js.map