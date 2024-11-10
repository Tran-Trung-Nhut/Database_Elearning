import { Router } from "express";
import authController from "./auth.controller";
import userController from "../user/user.controller";
import studentService from "../student/student.service";

const router = Router()

router.post('/login', authController.login as any)
router.post('/register-as-student', studentService.createStudent as any)


export default router