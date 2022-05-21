import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";
import * as handlebars from "handlebars";
import nodemailer from "nodemailer"

type CaptchaResponse = {
    success: boolean
    challenge_ts: string
    hostname: string
    "error-codes": string[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {body, method} = req
    if(method === "POST"){
        const {name, surname, email, phone, message, captcha} = body
        if(!await verifyCaptcha(captcha)){
            res.status(403).json("Error In Your Request")
            return
        }

        const clientEmailSource = fs.readFileSync(path.join(process.cwd(), "/data/email/contact.hbs"))
        const templateClient = handlebars.compile(clientEmailSource.toString())
        const htmlToSendClient = templateClient({name: name, surname: surname, email: email, phone: phone, message: message})

        const adminEmailSource = fs.readFileSync(path.join(process.cwd(), "/data/email/reference.hbs"))
        const templateAdmin = handlebars.compile(adminEmailSource.toString())
        const htmlToSendAdmin = templateAdmin({name: name, surname: surname, email: email, phone: phone, message: message})

        await sendEmail(name, surname, email, phone, message, htmlToSendClient, htmlToSendAdmin)
        res.status(200).json("OK")
    }else{
        res.status(403).json("Method Not Supported")
    }
}

const verifyCaptcha = async (captcha: string): Promise<boolean> => {
    if(!captcha){
        return false
    }
    try{
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_PRIVATE_KEY}&response=${captcha}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                },
                method: "POST",
            }
        );
        const captchaValidation: CaptchaResponse = await response.json()
        return captchaValidation.success;
    }catch (e){
        return false
    }
}

const sendEmail = async (name: string, surname: string, email: string, phone: string, message: string, htmlToSendClient: string, htmlToSendAdmin: string) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_SERVER_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `"Simone Bartoli" <${process.env.MAIL_SENDER}>`, // sender address
        to: `"${name} ${surname}" <${email}>`, // list of receivers
        subject: "Dr SW Clinic - Contact Request Received", // Subject line
        attachments: [{
            filename: 'logo.jpg',
            path: process.cwd() +'/data/email/logo.jpg',
            cid: 'logo'
        }],
        html: htmlToSendClient, // html body
    });

    await transporter.sendMail({
        from: `"Simone Bartoli" <${process.env.MAIL_SENDER}>`,
        to: `"Admin" <${process.env.MAIL_ADMIN}>`,
        subject: "Dr SW Clinic - A new request received",
        attachments: [{
            filename: 'logo.jpg',
            path: process.cwd() +'/data/email/logo.jpg',
            cid: 'logo'
        }],
        html: htmlToSendAdmin, // html body
    });
}

export default handler