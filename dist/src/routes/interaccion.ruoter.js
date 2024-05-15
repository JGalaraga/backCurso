"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interacion_controller_1 = require("../controllers/interacion.controller");
const validate_fields_1 = require("../middlewares/validate-fields");
const express_validator_1 = require("express-validator");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//Path /api/v1/interaccion
const router = (0, express_1.Router)();
router.get("/", interacion_controller_1.getInteracciiones);
router.post("/", [
    (0, express_validator_1.check)("descripcion", "La descripcion es obligatoria").not().isEmpty(), validate_fields_1.validateFields
], validate_jwt_1.validateJWT, interacion_controller_1.postInteracion);
router.put("/:id", interacion_controller_1.updateInteraccion);
router.delete("/:id", interacion_controller_1.deleteInteraccion);
exports.default = router;
//# sourceMappingURL=interaccion.ruoter.js.map