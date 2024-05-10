import nodemailer  from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'corrine.funk25@ethereal.email',
        pass: 'nTmsFuj9WqFYMFrRgD'
    }
});

//console.log("Entró")

transporter
.verify()
.then(() => {
    console.log("Puede enviar correos electrónicos")
})
.catch((error) =>{
    console.log("Error al enviar correos", error)
})
