import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contact", contactRouter);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
