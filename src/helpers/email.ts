import { transporter } from "../config/mailer"


export const sendEmail =(to: string, subject: string, html: string) => {
    transporter.sendMail(
        {
            from:  '"Corrine Tnez" <corrine.funk25@ethereal.email>',
            to,
            subject,
            html,
        }, 
        (error: any, info: any)=>{
            if(error){
                console.log("Error al enviar el correo", error)
            }
            else{
                console.log("Correo enviado")
                //console.log(info)
            }
        }
    )
}


