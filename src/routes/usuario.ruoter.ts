import  {Router} from "express"
import { postUsuario, deleteUsuario, getUnUsuario, getUsuarios, updateUsuario } from "../controllers/usuario.controller"
import { check } from "express-validator"
import { validateFields } from "../middlewares/validate-fields"
import { validateJWT } from "../middlewares/validate-jwt";

//Path /api/v1/usuario

const router =  Router()

router.post("/",[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(), 
    check("email", "El correo es obligatorio").not().isEmpty().isEmail(), validateFields],postUsuario)
router.get("/", validateJWT, getUsuarios)
router.get("/:id", validateJWT, getUnUsuario)
router.delete("/:id",validateJWT, deleteUsuario)
router.put("/:id", validateJWT, updateUsuario)

export default router;
