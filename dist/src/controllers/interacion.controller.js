"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInteraccion = exports.updateInteraccion = exports.getInteracciiones = exports.postInteracion = void 0;
const interaccion_model_1 = __importDefault(require("../models/interaccion.model"));
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const postInteracion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id;
    //const idCliente = "664400bd633a2398bb4c9cb0"
    const cliente = yield usuario_model_1.default.findOne();
    try {
        const newInteraccion = yield new interaccion_model_1.default(Object.assign({ usuario: id, cliente: cliente }, body));
        const interaccionCreada = yield newInteraccion.save();
        res.status(200).json({
            ok: true,
            msg: "Interacion creada satisfactoriamente",
            interaccion: interaccionCreada
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear la interaccion, comuniquese con el administrador"
        });
    }
});
exports.postInteracion = postInteracion;
const getInteracciiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const interacciones = yield interaccion_model_1.default.find();
        res.json({
            ok: true,
            interacciones
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar las interacciones"
        });
    }
});
exports.getInteracciiones = getInteracciiones;
const updateInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const updateInteraccion = yield interaccion_model_1.default.findByIdAndUpdate(id, body, { new: true });
        res.json({
            ok: true,
            msg: "Interaccion actualizada",
            interacion: updateInteraccion
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar la interaccion"
        });
    }
});
exports.updateInteraccion = updateInteraccion;
const deleteInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteInteraccion = yield interaccion_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            interacion: deleteInteraccion
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al eliminar la interacion"
        });
    }
});
exports.deleteInteraccion = deleteInteraccion;
//# sourceMappingURL=interacion.controller.js.map