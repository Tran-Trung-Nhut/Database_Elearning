import { Router } from "express";
import teacherQualificationController from "./teacherQualification.controller";
const router = Router()

// get all teacherQualification
router.get('/', teacherQualificationController.getAllTeacherQualification as any)

// get qualification by teacherId
router.get('/:teacherId', teacherQualificationController.getTeacherQualificationByTeacherId as any)

// get qualification by teacher email
router.get('/email/:email', teacherQualificationController.findTeacherQualificationByTeacherEmail as any)

// create qualification
router.post('/create', teacherQualificationController.createTeacherQualification as any)
export default router;