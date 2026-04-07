import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connect_DB.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.routes.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.routes.js";

dotenv.config();

const app = express();

// Important for cookies when deploying on Render / proxies
app.set("trust proxy", 1);

// CORS configuration
app.use(
cors({
origin: [
"http://localhost:5173",
"https://ai-interview-agent-pi.vercel.app",
],
credentials: true,
})
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
return res.json({ message: "Server Run At 8000 PORT" });
});

app.listen(PORT, () => {
console.log(`Server Running at ${PORT}`);
connectDB();
});
