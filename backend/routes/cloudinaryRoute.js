import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/signature", (req, res) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(`timestamp=${timestamp}${process.env.CLOUDINARY_SECRET_KEY}`)
    .digest("hex");

  res.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_NAME
  });
});

export default router;
