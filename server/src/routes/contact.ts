import { Router } from "express";
import { handleContact } from "../controllers/contactController.js";

export const contactRouter = Router();

contactRouter.post("/", handleContact);
