import { NextApiRequest, NextApiResponse } from "next";
import Mailgun from "mailgun.js";
import formData from "form-data";
const mailgun = new Mailgun(formData);

const mg = mailgun.client({ key: process.env.MAILGUN_KEY, username: "api" });

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, name, service, message } = req.body;

    const mail = await mg.messages.create("mg.urmyattorney.com", {
      to: "alexroth96@gmail.com",
      from: `${email}`,
      subject: `${service}`,
      html: `<div style="padding:10px; background-color:#eee;">
      <h2>Client contact request:${service}</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      </div>`,
    });

    console.log("mail", mail);
    //TODO setup dns to send
    // await mg.messages.create("mg.urmyattorney.com", {
    //   to: `${email}`,
    //   from: "bruce@urmyattorney.com",
    //   subject: `Confirmation Email For: ${service}`,
    //   html: `<div style="padding:10px; background-color:#eee;">
    //     <h2>Thank you for your interest in ${service}, we will contact you shortly!</h2>
    //   </div>`,
    // });

    return res.status(200).json({
      message:
        "Thank you, we have received your message and will contact you shortly.",
      success: true,
    });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: error, success: false });
  }
}
