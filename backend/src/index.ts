import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import userRoutes from "./user/user.route"
import authRoutes from "./auth/auth.route"
import studentRoutes from "./student/student.route"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use('/user',userRoutes)
app.use('/student', studentRoutes)
app.use('/auth', authRoutes)

const server = createServer(app)


server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});