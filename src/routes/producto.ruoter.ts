import  {Router} from "express"
import { getProductos,   postProducto,  getUnProducto, updateProducto, deleteUProducto } from "../controllers/producto.controller"

//Path /api/v1/producto

const router =  Router()

router.get("/", getProductos)
router.post("/", postProducto)
router.get("/:id", getUnProducto)
router.put("/:id", updateProducto)
router.delete("/:id", deleteUProducto)


export default router;
