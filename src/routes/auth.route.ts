//path /api/v1/login

import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { login, olvidoContrasena } from "../controllers/auth.controller";

const router = Router();

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  login
);

router.post("/",[
  check("email", "El email es obligatorio").isEmail(),
  check("numeroDocumento", "El password es obligatorio").not().isEmpty(),
  validateFields
], olvidoContrasena)

export default router;