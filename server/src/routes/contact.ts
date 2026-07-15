import { Router } from "express";
import { handleContact } from "../controllers/contactController.js";
import { contactUpload } from "../middleware/upload.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";

export const contactRouter = Router();

contactRouter.post("/", contactUpload, handleContact);
contactRouter.use(uploadErrorHandler);
