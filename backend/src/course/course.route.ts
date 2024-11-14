import { Router } from "express";
import courseController from "./course.controller";
const router = Router();

//  get all courses
router.get('/', courseController.getAllCourses as any)
// get course by id
router.get('/:id', courseController.getCourseById as any)
// create new course
router.post('/create', courseController.createNewCourse as any)
export default router