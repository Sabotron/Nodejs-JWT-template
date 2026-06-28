import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from "./config/db.js";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRouter.js";
import usersRoutes from "./routes/usersRouter.js";
const app = express();



dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use("/api/users", usersRoutes);

app.listen(4000, () => {
    console.log(`Server running on port ${PORT}`);
})