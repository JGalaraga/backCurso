"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'corrine.funk25@ethereal.email',
        pass: 'nTmsFuj9WqFYMFrRgD'
    }
});
//console.log("Entró")
exports.transporter
    .verify()
    .then(() => {
    console.log("Puede enviar correos electrónicos");
})
    .catch((error) => {
    console.log("Error al enviar correos", error);
});
//# sourceMappingURL=mailer.js.map