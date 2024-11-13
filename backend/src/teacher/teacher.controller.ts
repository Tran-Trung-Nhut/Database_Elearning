import exp from 'constants'
import teacherService from './teacher.service'
import { Response, Request } from 'express'
class TeacherController{

    public getAllTeachers = async (req: Request, res: Response) => {
        try{
            const teachers = await teacherService.getAllTeachers()

            if (teachers.length === 0){
                return res.status(404).json({
                    message: 'There is no teacher existed'
                })
            }
            return res.status(200).json({
                message: 'success',
                data: teachers
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public getTeacherById = async (req: Request, res: Response) => {
        try{
            const { id } = req.params

            const teacher = await teacherService.getTeacherById(id)

            if(!teacher){
                return res.status(404).json({
                    message: 'Teacher does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: teacher
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public createNewTeacher = async (req: Request, res: Response) => {
        try{
            const {
                firstName,
                lastName,
                username,
                password,
                email,
                bankName,
                bankAccount,
                teacherId
            } = req.body

            const newTeacher = await teacherService.createNewTeacher(
                firstName,
                lastName,
                username,
                password,
                email,
                bankName,
                bankAccount,
                teacherId
            )

            if(!newTeacher){
                return res.status(400).json({
                    message: 'Failed to create new teacher'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: newTeacher
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }
}

export default new TeacherController()