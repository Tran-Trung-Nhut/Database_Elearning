import { Router } from "express";
import answerRecordController from "./answerRecord.controller";
const router = Router();

router.get('/quiz/:quizId/student/:studentId', answerRecordController.getRecordByQuizAndStudentID as any);
router.get('/question/:questionId', answerRecordController.getRecordByQuestionId as any);
router.post('/create', answerRecordController.createRecord as any);
router.patch('/update', answerRecordController.updateRecord as any);
router.delete('/delete', answerRecordController.deleteRecord as any);

export default router;