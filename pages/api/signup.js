import mongoose from "mongoose";
import { Product } from "./lib/product";
import nodemailer from "nodemailer";

export default async function signup(req, res) {
  const username = process.env.inrainmail;
  const password = process.env.inrainmailpassword;
  const sub = "Form Submission from Website - inrainconstruction.com";

  try {
    if (req.method === "POST") {
      const { myname, myemail, mymobile, mymessage, GoogleAds } = req.body;

      await mongoose.connect(process.env.url);
      let product = new Product({
        name: myname,
        email: myemail,
        mobile: mymobile,
        message: mymessage,
      });
      const result = await product.save();

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: username,
            pass: password,
          },
        });
        const mailOptions = {
          from: username,
          to: process.env.receivingmail,
          subject: sub,
          text: `Submission: ${GoogleAds} \n\n Name: ${myname} \n\n Email: ${myemail} \n\n Mobile No: ${mymobile} \n\n Message: ${mymessage}`,
        };
        const info = transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (err) {
        console.log("Connection not build");
      }

      res.status(200).json({
        success: true,
        message: "Data Submitted Successfully",
      });
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
