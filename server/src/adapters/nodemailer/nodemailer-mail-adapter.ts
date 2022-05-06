import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c801fd5419dcb",
      pass: "54728404c322ac"
    }
});

export class NodemailerMailAdapter implements MailAdapter {  
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to:'Felipe Azevedo <felipeluis610@gmail.com>',
            subject,
            html: body,
        })
    };
}