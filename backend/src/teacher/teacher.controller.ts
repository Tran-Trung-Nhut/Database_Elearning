import teacherService from './teacher.service'
import { Response, Request } from 'express'
import userService from '../user/user.service'
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
            
            console.log(req.body)
            console.log(firstName, lastName, username, password, email, bankName, bankAccount, teacherId)
            const newTeacher = await teacherService.createNewTeacher(
                firstName,
                lastName,
                username,
                password,
                email,
                bankName,
                bankAccount,
                teacherId,
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
        }catch(e:any){
            // console.log(e, e.message)
            // console.log(password, saltRounds)
            res.status(500).json({
                message: e.message
            })
        }
    }

    public updateTeacher = async (req: Request, res: Response) => {
        try{
            const {
                id,
                firstName,
                lastName,
                username,
                password,
                role,
                email,
                bankName,
                bankAccount,
            } = req.body
            const existUser = await userService.getUserByIdWithPassword(id)
            const updateTeacher = await teacherService.updateTeacher(
                id,
                firstName,
                lastName,
                username,
                password,
                role,
                email,
                bankName,
                bankAccount,
                existUser[0].password
            )
            if(!updateTeacher){
                return res.status(400).json({
                    message: 'Failed to update teacher'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: updateTeacher
            })
        }catch(e:any){
            res.status(500).json({
                message: e.message
            })
        }
    }

    public deleteTeacher = async (req: Request, res: Response) => {
        try{
            const { id } = req.params

            const teacher = await teacherService.deleteTeacher(id)

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
}

export default new TeacherController()