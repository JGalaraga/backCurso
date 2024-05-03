import  {Router} from "express"
import { crearUsuario } from "../controllers/usuario.controller"

//Path /api/v1/usuario

const router =  Router()

router.post("/", crearUsuario)

export default router;
