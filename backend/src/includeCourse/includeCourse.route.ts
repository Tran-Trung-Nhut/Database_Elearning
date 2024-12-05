import { Router } from "express";
import includeCourseController from "./includeCourse.controller";
const router = Router();

router.get("/", includeCourseController.getAllIncludeCourse as any);
router.get("/rmId/:rmId/courseId/:courseId", includeCourseController.getIncludeCourseById as any);
router.post("/create", includeCourseController.createIncludeCourse as any);
router.patch("/update", includeCourseController.updateIncludeCourse as any);
router.delete("/rmId/:rmId/courseId/:courseId", includeCourseController.deleteIncludeCourse as any);
export default router;