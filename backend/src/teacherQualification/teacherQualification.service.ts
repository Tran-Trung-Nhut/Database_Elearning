
import { db } from "../db/db";
import { teacher, teacherQualification, user } from "../db/schema";
import { eq } from "drizzle-orm";
class teacherQualificationService {
    public async getAllTeacherQualification(){
        try {
            const teacherQualifications = await db.select(
                {
                    teacherId: teacherQualification.teacherId,
                    qualification: teacherQualification.qualification
                }
            )
            .from(teacherQualification)

            return {
                status: 200,
                message: "Sucessfully",
                data: teacherQualifications
            }
        }
        catch(e){
            return {
                status: 500,
                message: "Internal link server"
            }
        }
    }

    public async getTeacherQualificationByTeacherId(teacherId: string){
        try {
            const teacherQualificationByTeacherId = await db.select(
                {
                    teacherId: teacherQualification.teacherId,
                    qualification: teacherQualification.qualification
                }
            )
            .from(teacherQualification)
            .where(eq(teacherQualification.teacherId, teacherId))

            return {
                status: 200,
                message: "Sucessfully",
                data: teacherQualificationByTeacherId
            }
        }
        catch(e){
            return {
                status: 500,
                message: "Internal link server"
            }
        }
    }

    public async findTeacherQualificationByTeacherEmail(email: string){
        try{
            // find teacher by email first
            const teacherByEmail = await db.select(
                {
                    email: user.email,
                    teacherId: teacher.teacherId
                }
            )
            .from(user)
            .innerJoin(teacher, eq(teacher.userId, user.id))
            .where(eq(user.email, email))

            // if teacher not found
            if(teacherByEmail.length === 0){
                return {
                    status: 404,
                    message: "Teacher not found"
                }
            }

            // find teacher qualification by teacherId
            const teacherQualificationByTeacherId = await db.select(
                {
                    teacherId: teacherQualification.teacherId,
                    qualification: teacherQualification.qualification
                }
            )
            .from(teacherQualification)
            .where(eq(teacherQualification.teacherId, teacherByEmail[0].teacherId))

            return {
                status: 200,
                message: "Sucessfully",
                data: teacherQualificationByTeacherId
            }

        }       
        catch(error){
            return{
                status: 500,
                message: error
            }
        }
    }

    public async createTeacherQualification(teacherId: string, qualification: string){
        try{
            const teacherQualificationData = {
                teacherId: teacherId,
                qualification: qualification
            }

            const newQuali = await db.insert(teacherQualification)
                    .values(teacherQualificationData)
                    .returning(
                        {
                            teacherId: teacherQualification.teacherId,
                            qualification: teacherQualification.qualification
                        }
                    )

            return {
                status: 200,
                message: "Successfully",
                data: {
                    teacherId: newQuali[0].teacherId,
                    qualification: newQuali[0].qualification
                }
            }
        }
        catch(e){
            return {
                status: 500,
                message: "Internal link server"
            }
        }
    }

    
}


export default new teacherQualificationService();