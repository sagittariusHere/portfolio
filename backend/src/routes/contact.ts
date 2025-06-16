import express, { Request, Response, Router } from "express";
import { sendContactEmail } from "../services/sendEmail";
import { EmailData } from "../types/contactForm";
import sendResponse from "../utils/responseHelper";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body as EmailData;

  if (!name || !email || !message) {
    sendResponse({
      res,
      success: false,
      statusCode: 400,
      message: "All fields are required.",
    });
    return;
  }
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    sendResponse({
      res,
      success: false,
      statusCode: 400,
      message: "Invalid email format.",
    });
    return;
  }

  try {
    await sendContactEmail({ name, email, message });
    sendResponse({
      res,
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    sendResponse({
      res,
      success: false,
      statusCode: 500,
      message: "Failed to send message. Please try again later.",
      errors: error,
    });
  }
});
router.get("/", async (req: Request, res: Response): Promise<void> => {
  sendResponse({
    res,
    success: true,
    message: "GET Contact route is working.",
  });
});

export default router;
