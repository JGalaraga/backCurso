import  {Router} from "express"
import { getProductos,   postProducto,  getUnProducto, updateProducto, deleteUProducto } from "../controllers/producto.controller"
import { validateFields } from "../middlewares/validate-fields"
import { check } from "express-validator"
import { validateJWT } from "../middlewares/validate-jwt"

//Path /api/v1/producto

const router =  Router()

router.get("/", getProductos)
router.post("/", [
    check("nombre", "El nombre del producto es obligatorio").not().isEmpty(),
    check("sku", "El sku del producto es obligatorio").not().isEmpty(), 
    check("cantidad", "La cantidad del producto es obligatorio").not().isEmpty().isNumeric(),
    check("precio", "El precio del producto es obligatorio").not().isEmpty(), validateFields], validateJWT, postProducto)
router.get("/:id", getUnProducto)
router.put("/:id", updateProducto)
router.delete("/:id", deleteUProducto)


export default router;
