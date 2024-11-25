import { db } from "../db/db"
import { user } from "../db/schema"
import { teacher } from "../db/schema"
import { eq } from "drizzle-orm"
import userService from "../user/user.service"
class TeacherService {
    
    public getAllTeachers = async () => {
        const teachers = await db.select(
            {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role,
                email: user.email,
                bankName: user.bankName,
                bankAccount: user.bankAccount,
                teacherId: teacher.teacherId,
            }
        ).from(user)
        .innerJoin(teacher, eq(teacher.userId, user.id))
        
        return teachers;
    }

    public getTeacherById = async (id: string) => {
        const teacherById = await db.select(
            {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role,
                email: user.email,
                bankName: user.bankName,
                bankAccount: user.bankAccount,
                teacherId: teacher.teacherId,
            }
        ).from(user)
        .innerJoin(teacher, eq(teacher.userId, user.id))
        .where(eq(user.id, id))
        
        return teacher;
    }

    public getTeacherByTeacherId = async (teacherId: string) => {
        const teacherByTeacherId = await db.select(
            {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role,
                email: user.email,
                bankName: user.bankName,
                bankAccount: user.bankAccount,
                teacherId: teacher.teacherId,
            }
        ).from(user)
        .innerJoin(teacher, eq(teacher.userId, user.id))
        .where(eq(teacher.teacherId, teacherId))
        
        return teacherByTeacherId;
    }
    public createNewTeacher = async (
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        email: string,
        bankName: string,
        bankAccount: string,
        teacherId: string,
    ) => {
        const newUser = await userService.createNewUser(
            firstName,
            lastName,
            email,
            username,
            password,
            'teacher',
            bankName,
            bankAccount
        )
        
        if(!newUser){
            console.log('error user')
            return null
        }

        const newTeacher = await db
        .insert(teacher)
        .values(
            {
                userId: newUser[0].id,
                teacherId: teacherId,
            }
        )
        .returning({
            teacherId: teacher.teacherId,
        })

        if (!newTeacher || newTeacher.length === 0){
            console.log('error teacher')
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
            teacherId: newTeacher[0].teacherId,
        }
    }

    public updateTeacher = async (
        id: string,
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        role: string,
        email: string,
        bankName: string,
        bankAccount: string,
        hashedPassword: string
    ) => {
        console.log(id, firstName, lastName, username, password, role, email, bankName, bankAccount, hashedPassword)
        const updateUser = await userService.updateUser(
            id,
            firstName,
            lastName,
            email,
            username,
            password,
            role,
            bankName,
            bankAccount,
            hashedPassword
        )

        if(!updateUser || updateUser.length === 0){
            return null
        }
        const updateTeacher = await db
        .update(teacher)
        .set({
            userId: updateUser[0].id
        })
        .where(eq(teacher.userId, id))
        .returning({
            teacherId: teacher.teacherId,
        })

        if(!updateTeacher || updateTeacher.length === 0){
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
            teacherId: updateTeacher[0].teacherId,
        }
    }

    public deleteTeacher = async (id: string) => {
        const teacherToDelete = await db
        .delete(teacher)
        .where(eq(teacher.userId, id))
        .returning({
            teacherId: teacher.teacherId,
        })

        if(!teacherToDelete || teacherToDelete.length === 0){
            return null
        }

        const userToDelete = await userService.deleteUser(id, teacherToDelete)

        if(!userToDelete){
            return null
        }

        return {
            userToDelete
        }
    }
}

export default new TeacherService()