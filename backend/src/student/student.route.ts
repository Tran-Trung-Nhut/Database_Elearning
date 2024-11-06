import { Router } from "express";
import studentController from "./student.controller";

const router = Router()

router.get('/', studentController.getAllStudents as any)
router.get('/:id')
router.post('/create')
router.put('/update')
router.delete('/delete/:id')