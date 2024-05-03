import dotenv from "dotenv"
import Server from "./src/server";


//Copnfigurar el .env
dotenv.config()

const server = new Server()
server.listen()