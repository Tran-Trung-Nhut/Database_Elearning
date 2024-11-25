import { Request, Response } from "express";
import teacherQualificationService from "./teacherQualification.service";
class teacherQualificationController {
    public async getAllTeacherQualification(req: Request, res: Response){
        return teacherQualificationService.getAllTeacherQualification();
    }

    public async getTeacherQualificationByTeacherId(req: Request, res: Response){
        const {teacherId }= req.params;
        return teacherQualificationService.getTeacherQualificationByTeacherId(teacherId);
    }

    public async findTeacherQualificationByTeacherEmail(req: Request, res: Response){
        const email = req.params.email;
        return teacherQualificationService.findTeacherQualificationByTeacherEmail(email);
    }

    public async createTeacherQualification(req: Request, res: Response){
        const teacherId = req.body.teacherId
        const qualification = req.body.qualification

        return teacherQualificationService.createTeacherQualification(teacherId, qualification)
    }
}

export default new teacherQualificationController();