"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
//Path /api/v1/usuario
const router = (0, express_1.Router)();
router.post("/", usuario_controller_1.crearUsuario);
exports.default = router;
//# sourceMappingURL=usuario.ruoter.js.map