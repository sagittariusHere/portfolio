import nodemailer from "nodemailer";
import { EmailData } from "../types/contactForm";

import dotenv from "dotenv";
dotenv.config();

export const sendContactEmail = async ({ name, email, message }: EmailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const msg = {
    to: process.env.GMAIL_USER!,
    from: process.env.GMAIL_USER!,
    subject: `New message at Portfolio website from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  };

  await transporter.sendMail(msg);
};
