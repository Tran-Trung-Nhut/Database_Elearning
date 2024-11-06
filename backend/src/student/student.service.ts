import { eq, sql } from "drizzle-orm"
import { db } from "../db/db"
import { student, user } from "../db/schema"
import userService from "../user/user.service"

class StudentService{
    public getAllStudents = async () => {
        return await db
        .select({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            role: user.role,
            email: user.email,
            bankName: user.bankName,
            bankAccout: user.bankAccount,
            studentId: student.studentId,
            enrollmentDate: student.enrollmentDate,
            numberCourseEnrolled: student.numberCoursesEnrolled,
            numberCourseCompleted: student.numberCoursesCompleted
        })
        .from(user)
        .innerJoin(student, eq(student.userId, user.id))
    }

    public getStudentById = async (id: string) =>{
        return await db
        .select({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            role: user.role,
            email: user.email,
            bankName: user.bankName,
            bankAccout: user.bankAccount,
            studentId: student.studentId,
            enrollmentDate: student.enrollmentDate,
            numberCourseEnrolled: student.numberCoursesEnrolled,
            numberCourseCompleted: student.numberCoursesCompleted
        })
        .from(user)
        .innerJoin(student, eq(student.userId, user.id))
        .where(eq(user.id, id))
    }

    public createStudent = async (
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        role: string,
        email: string,
        bankName: string,
        bankAccount: string,
        studentId: string,
    ) => {
        const newUser = await userService.createNewUser(
            firstName,
            lastName,
            userName,
            password,
            role,
            email,
            bankName,
            bankAccount
        )

        if(!newUser || newUser.length === 0){
            return null
        }

        const newStudent = await db
        .insert(student)
        .values({
            userId: newUser[0].id,
            studentId: studentId,
            enrollmentDate: new Date().toISOString(),
            numberCoursesEnrolled: 0,
            numberCoursesCompleted: 0,
        })
        .returning({
            studentId: student.studentId,
            enrollmentDate: student.enrollmentDate,
            numberCoursesEnrolled: student.numberCoursesEnrolled,
            numberCoursesCompleted: student.numberCoursesCompleted
        })

        if(!newStudent || newStudent.length === 0) {
            return null
        }

        return {
            id: newUser[0].id,
            firstName: newUser[0].firstName,
            lastName: newUser[0].lastName,
            username: newUser[0].username,
            role: newUser[0].role,
            email: newUser[0].email,
            bankName: newUser[0].bankName,
            bankAccount: newUser[0].bankAccount,
            studentId: newStudent[0].studentId,
            enrollmentDate: newStudent[0].enrollmentDate,
            numberCoursesEnrolled: newStudent[0].numberCoursesEnrolled,
            numberCoursesCompleted: newStudent[0].numberCoursesCompleted,
        }
    }

    public updateStudent = async (
        id: string,
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        role: string,
        email: string,
        bankName: string,
        bankAccount: string,
        numberCourseEnrolled: number,
        numberCourseCompleted: number,
        hashedPassword: string     
    ) => {
        const updateUser = await userService.updateUser(
            id,
            firstName,
            lastName,
            email,
            userName,
            password,
            role,
            bankName,
            bankAccount,
            hashedPassword)

        if(!updateUser || updateUser.length === 0) {
            return null
        }

        const updatedStudent = await db
        .update(student)
        .set({
            numberCoursesCompleted: numberCourseCompleted,
            numberCoursesEnrolled: numberCourseEnrolled
        })
        .returning({
            studentId: student.studentId,
            enrollmentDate: student.enrollmentDate,
            numberCoursesEnrolled: student.numberCoursesEnrolled,
            numberCoursesCompleted: student.numberCoursesCompleted
        })

        if(!updateUser || updatedStudent.length === 0) {
            return null
        }

        return {
            id: updateUser[0].id,
            firstName: updateUser[0].firstName,
            lastName: updateUser[0].lastName,
            username: updateUser[0].username,
            role: updateUser[0].role,
            email: updateUser[0].email,
            bankName: updateUser[0].bankName,
            bankAccount: updateUser[0].bankAccount,
            studentId: updatedStudent[0].studentId,
            enrollmentDate: updatedStudent[0].enrollmentDate,
            numberCoursesEnrolled: updatedStudent[0].numberCoursesEnrolled,
            numberCoursesCompleted: updatedStudent[0].numberCoursesCompleted,
        }
    }

    public deleteStudent = async (id: string) => {
        const deleteStudent = await db
        .delete(student)
        .where(eq(student.userId, id))
        .returning({
            studentId: student.studentId,
            enrollmentDate: student.enrollmentDate,
            numberCourseEnrolled: student.numberCoursesEnrolled,
            numberCourseCompleted: student.numberCoursesCompleted
        })

        if(!deleteStudent || deleteStudent.length === 0){
            return null
        }

        return await userService.deleteUser(id, deleteStudent)
    }
}

export default new StudentService()