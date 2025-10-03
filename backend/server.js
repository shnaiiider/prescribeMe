import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";
import cloudinaryRoute from "./routes/cloudinaryRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// connect db
connectDB();
connectCloudinary();
app.use(cors());   

// ✅ allow deployed frontend + local dev
const allowedOrigins = [
  "http://localhost:5173",
  "https://prescripto-full-stack-3.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/cloudinary", cloudinaryRoute);

app.get("/", (req, res) => {
  res.send("API Working ✅");
});

app.listen(port, () => console.log(`🚀 Server started on PORT:${port}`));
