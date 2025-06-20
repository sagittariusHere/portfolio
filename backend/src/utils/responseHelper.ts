import { Response } from "express";

interface ResponseData {
  res: Response;
  success: boolean;
  statusCode?: number;
  message: string;
  data?: any;
  errors?: any;
}

export default function sendResponse({
  res,
  success,
  statusCode,
  message,
  data = null,
  errors = null,
}: ResponseData) {
  const status = statusCode || (success ? 200 : 400);

  res.status(status).json({
    success,
    message,
    data,
    errors,
  });
}
