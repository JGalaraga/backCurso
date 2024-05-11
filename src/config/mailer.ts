import nodemailer  from "nodemailer";
import { config } from "./config";

const environment = config[process.env.NODE_ENV || "desarrollo"]

const {host, port, email, password} = environment.email

export const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false,
    auth: {
        user: email,
        pass: password
    },
});

//console.log(host, port, email, password)
//console.log("Entró")

transporter
.verify()
.then(() => {
    console.log("Puede enviar correos electrónicos")
})
.catch((error) =>{
    console.log("Error al enviar correos", error)
})
