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
exports.deleteUProducto = exports.updateProducto = exports.getUnProducto = exports.getProductos = exports.postProducto = void 0;
const producto_model_1 = __importDefault(require("../models/producto.model"));
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newProducto = yield new producto_model_1.default(Object.assign({}, body));
        const productoCreado = yield newProducto.save();
        res.status(200).json({
            ok: true,
            msg: "Producto creado satisfactoriamente",
            usuario: productoCreado
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el producto, comuniquese con el administrador"
        });
    }
});
exports.postProducto = postProducto;
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield producto_model_1.default.find();
        res.json({
            ok: true,
            productos
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar los productos"
        });
    }
});
exports.getProductos = getProductos;
const getUnProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const producto = yield producto_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            producto
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar el producto"
        });
    }
});
exports.getUnProducto = getUnProducto;
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const updateProducto = yield producto_model_1.default.findByIdAndUpdate(id, body, { new: true });
        res.json({
            ok: true,
            msg: "Producto actualizado",
            producto: updateProducto
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar el producto"
        });
    }
});
exports.updateProducto = updateProducto;
const deleteUProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteProducto = yield producto_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            producto: deleteProducto
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al eliminar el producto"
        });
    }
});
exports.deleteUProducto = deleteUProducto;
//# sourceMappingURL=producto.controller.js.map