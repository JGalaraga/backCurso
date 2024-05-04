"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
//Path /api/v1/producto
const router = (0, express_1.Router)();
router.get("/", producto_controller_1.getProductos);
router.post("/", producto_controller_1.postProducto);
router.get("/:id", producto_controller_1.getUnProducto);
router.put("/:id", producto_controller_1.updateProducto);
router.delete("/:id", producto_controller_1.deleteUProducto);
exports.default = router;
//# sourceMappingURL=producto.ruoter.js.map