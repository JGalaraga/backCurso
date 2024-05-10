"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const mailer_1 = require("../config/mailer");
const sendEmail = (to, subject, html) => {
    mailer_1.transporter.sendMail({
        from: '"Corrine Tnez" <corrine.funk25@ethereal.email>',
        to,
        subject,
        html,
    }, (error, info) => {
        if (error) {
            console.log("Error al enviar el correo", error);
        }
        else {
            console.log("Correo enviado");
            //console.log(info)
        }
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map