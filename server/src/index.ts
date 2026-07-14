import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { contactRouter } from "./routes/contact.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
// Render (and most PaaS hosts) sit behind a reverse proxy that sets
// X-Forwarded-For; without this, express-rate-limit can't trust that header
// and throws on every request.
app.set("trust proxy", 1);
const PORT = Number(process.env.PORT ?? 4000);
const allowedOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactLimiter, contactRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Contact API listening on port ${PORT}`);
});
