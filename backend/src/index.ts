import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import userRoutes from "./user/user.route"
import authRoutes from "./auth/auth.route"
import teacherRoutes from "./teacher/teacher.route"
import studentRoutes from "./student/student.route"
import courseRoutes from "./course/course.route"
import cors from "cors";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors()); // Enable CORS
app.use(express.json())
app.use('/user',userRoutes)
app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)
app.use('/auth', authRoutes)
app.use('/course', courseRoutes)
const server = createServer(app)


server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});