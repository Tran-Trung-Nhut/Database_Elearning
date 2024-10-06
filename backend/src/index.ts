import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import userRoutes from "./users/user.route"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/users',userRoutes)

const server = createServer(app)


server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});