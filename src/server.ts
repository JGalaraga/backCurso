import  express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import cors from "cors"
import usuarioRoutes from "./routes/usuario.ruoter"
import productoRoutes from "./routes/producto.ruoter"
import authRoutes from "./routes/auth.route";
import interaccionRoutes from "./routes/interaccion.ruoter";

class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        usuario: "/api/v1/usuario",
        producto: "/api/v1/producto",
        login: "/api/v1/login",
        interaccion: "/api/v1/interaccion"
    }


    constructor(){
        this.app = express()
        this.port =  process.env.PORT ||  "3000"

        //Base de datos
        dbConnection()

        //Metodos iniciales
        this.middlewares()
        

        //Rutas
        this. ruotes()

    }

    miPrimerApi(){
        this.app.get("/", (req: Request, res: Response) =>
        res.status(200).json({msg: "Api funcionando"})
    )
    }

    middlewares(){
        this.app.use(cors())

        //Lectura del body
        this.app.use(express.json())

        this.miPrimerApi()
    }

    ruotes(): void{
        this.app.use(this.apiPaths.usuario, usuarioRoutes)
        this.app.use(this.apiPaths.producto, productoRoutes)
        this.app.use(this.apiPaths.login, authRoutes);
        this.app.use(this.apiPaths.interaccion, interaccionRoutes);
    }

    listen(): void{
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo por el puerto", this.port)
        })
    }
}


export default Server;