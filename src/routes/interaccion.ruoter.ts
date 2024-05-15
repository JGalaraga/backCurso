import  {Router} from "express"
import { getInteracciiones,   postInteracion, updateInteraccion, deleteInteraccion } from "../controllers/interacion.controller"
import { validateFields } from "../middlewares/validate-fields"
import { check } from "express-validator"
import { validateJWT } from "../middlewares/validate-jwt"

//Path /api/v1/interaccion

const router =  Router()

router.get("/", getInteracciiones)
router.post("/", [
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(), validateFields], validateJWT, postInteracion)
router.put("/:id", updateInteraccion)
router.delete("/:id", deleteInteraccion)


export default router;
