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
            bankAccount,
        )
    
        if(!newUser){
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
}

export default new TeacherService()