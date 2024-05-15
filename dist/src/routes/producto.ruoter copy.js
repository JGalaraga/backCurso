"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const validate_fields_1 = require("../middlewares/validate-fields");
const express_validator_1 = require("express-validator");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//Path /api/v1/producto
const router = (0, express_1.Router)();
router.get("/", producto_controller_1.getProductos);
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre del producto es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("sku", "El sku del producto es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("cantidad", "La cantidad del producto es obligatorio").not().isEmpty().isNumeric(),
    (0, express_validator_1.check)("precio", "El precio del producto es obligatorio").not().isEmpty(), validate_fields_1.validateFields
], validate_jwt_1.validateJWT, producto_controller_1.postProducto);
router.get("/:id", producto_controller_1.getUnProducto);
router.put("/:id", producto_controller_1.updateProducto);
router.delete("/:id", producto_controller_1.deleteUProducto);
exports.default = router;
//# sourceMappingURL=producto.ruoter%20copy.js.map