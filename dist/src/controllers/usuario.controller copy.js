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
exports.deleteUsuario = exports.updateUsuario = exports.getUnUsuario = exports.getUsuarios = exports.postUsuario = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newUsuario = yield new usuario_model_1.default(Object.assign({}, body));
        const usuarioCreado = yield newUsuario.save();
        res.status(200).json({
            ok: true,
            msg: "Usuario creado satisfactoriamente",
            usuario: usuarioCreado
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el usuario, comuniquese con el administrador"
        });
    }
});
exports.postUsuario = postUsuario;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_model_1.default.find();
        res.json({
            ok: true,
            usuarios
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar los usuarios"
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUnUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const usuario = yield usuario_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            usuario
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar el usuario"
        });
    }
});
exports.getUnUsuario = getUnUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const updateUsuario = yield usuario_model_1.default.findByIdAndUpdate(id, body, { new: true });
        res.json({
            ok: true,
            msg: "Usuario actualizado",
            usuario: updateUsuario
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar el usuario"
        });
    }
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteUsuario = yield usuario_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            usuario: deleteUsuario
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al eliminar el usuario"
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.controller%20copy.js.map