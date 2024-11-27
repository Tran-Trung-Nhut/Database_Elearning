import { Request, Response } from 'express';
import answerRecordService from './answerRecord.service';
class answerRecordController {
    public async getRecordByQuizAndStudentID(req: Request, res: Response){
        try {
            const record = await answerRecordService.getRecordByQuizIdAndStudentId(req.params.quizId, req.params.studentId)
            
            return res.status(record.status).send(record)
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }
    public async getRecordByQuestionId(req: Request, res: Response){
        try {
            const record = await answerRecordService.getRecordByQuestionId(req.params.questionId)
            return res.status(record.status).send(record)
        } catch (error) {
            return {
                message: error,
                status: 500
            }   
        }
    }

    public async createRecord(req: Request, res: Response){
        try {
            const record = await answerRecordService.createRecord(req.body)
            return res.status(record.status).send(record)
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateRecord(req: Request, res: Response){
        try {
            const record = await answerRecordService.updateRecord(req.body)
            return res.status(record.status).send(record)
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteRecord(req: Request, res: Response){
        try {
            const record = await answerRecordService.deleteRecord(req.body.quizId, req.body.studentId, req.body.questionId)
            return res.status(record.status).send(record)
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

}

export default new answerRecordController();