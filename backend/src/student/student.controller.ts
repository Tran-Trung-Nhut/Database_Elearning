import { Request, Response } from "express"
import studentService from "./student.service"

class StudentController{
    public getAllStudents = async (req: Request, res: Response) => {
        try{
            const students = await studentService.getAllStudents()

            if(students.length === 0){
                return res.status(404).json({
                    message: 'There is no student existed'
                })

            }
            return res.status(200).json({
                message: 'success',
                data: students
            })
            
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public getStudentById = async (req: Request, res: Response) => {
        try{
            const { id } = req.params

            const student = await studentService.getStudentById(id)

            if(student.length === 0){
                return res.status(404).json({
                    message: 'Student does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: student[0]
            })
            
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }
}

export default new StudentController()