import { Router } from "express";
import authController from "./auth.controller";
import userController from "../user/user.controller";

const router = Router()

router.post('/login', authController.login as any)
router.post('/register', userController.createNewUser as any)


export default router