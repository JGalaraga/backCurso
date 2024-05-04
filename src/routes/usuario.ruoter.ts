import  {Router} from "express"
import { postUsuario, deleteUsuario, getUnUsuario, getUsuarios, updateUsuario } from "../controllers/usuario.controller"

//Path /api/v1/usuario

const router =  Router()

router.post("/", postUsuario)
router.get("/", getUsuarios)
router.get("/:id", getUnUsuario)
router.delete("/:id", deleteUsuario)
router.put("/:id", updateUsuario)

export default router;
