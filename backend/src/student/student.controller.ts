import { Request, Response } from "express"
import studentService from "./student.service"
import userService from "../user/user.service"

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

    public createNewStudent = async (req: Request, res: Response) => {
        try{
            const {firstName,
                lastName,
                username,
                password,
                email,
                bankName,
                bankAccount,
                studentId} = req.body

            const newStudent = await studentService.createStudent(
                firstName,
                lastName,
                username,
                password,
                email,
                bankName,
                bankAccount,
                studentId
            )

            if(!newStudent){
                return res.status(500).json({
                    message: 'Create student fail'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: newStudent
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public updateStudent = async (req: Request, res: Response) => {
        try{
            const { id,
                firstName,
                lastName,
                username,
                password,
                role,
                email,
                bankName,
                bankAccount,
                numberCoursesEnrolled,
                numberCoursesCompleted} = req.body

            const existUser = await userService.getUserByIdWithPassword(id)

            if(!existUser || existUser.length === 0){
                return res.status(404).json({
                    message: 'Student ID does not exist'
                })
            }

            const updateStudent = await studentService.updateStudent(
                id,
                firstName,
                lastName,
                username,
                password,
                role,
                email,
                bankName,
                bankAccount,
                numberCoursesEnrolled,
                numberCoursesCompleted,
                existUser[0].password
            )

            if(!updateStudent){
                return res.status(500).json({
                    message: 'Update student fail'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: updateStudent
            })
        }catch(e){
            console.log(e)
            res.status(500).json({
                message: e
            })
        }
    }

    public deleteStudent = async (req: Request, res: Response) => {
        try{
            const { id } = req.params

            const existStudent = await studentService.getStudentById(id)

            if(!existStudent || existStudent.length === 0){
                return res.status(404).json({
                    message: 'Student ID does not exist'
                })
            }

            const deleteStudent = await studentService.deleteStudent(id)

            if(!deleteStudent){
                return res.status(500).json({
                    message: 'Delete student fail',
                })
            }

            return res.status(200).json({
                message: 'success',
                data: deleteStudent
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }
}

export default new StudentController()