import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'baramomailsender@gmail.com',
        pass: 'mjaffhowdzvqnide'
    }
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {

    transporter.sendMail(req.body, function (err: any, data: any) {
        if (err) {
            res.status(500).json({"error" : err})
        }
        else {
            res.status(200).json({"message": "Message envoyé merci"})
        }
        transporter.close();
    })

  }
  