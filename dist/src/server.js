"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cors_1 = __importDefault(require("cors"));
const usuario_ruoter_1 = __importDefault(require("./routes/usuario.ruoter"));
const producto_ruoter_1 = __importDefault(require("./routes/producto.ruoter"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/v1/usuario",
            producto: "/api/v1/producto"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //Base de datos
        (0, connection_1.dbConnection)();
        //Metodos iniciales
        this.middlewares();
        //Rutas
        this.ruotes();
    }
    miPrimerApi() {
        this.app.get("/", (req, res) => res.status(200).json({ msg: "Api funcionando" }));
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        this.miPrimerApi();
    }
    ruotes() {
        this.app.use(this.apiPaths.usuario, usuario_ruoter_1.default);
        this.app.use(this.apiPaths.producto, producto_ruoter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo por el puerto", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map