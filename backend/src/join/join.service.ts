import { and, eq } from "drizzle-orm";
import { db } from "../db/db";
import { course, join, user } from "../db/schema";
import { joinDto } from "../dtos/join.dto";

class joinService {
    public async getAllJoin(){
        try {
            const joins = await db.select({
                courseId: join.courseId,
                studentId: join.studentId,
                dateComplete: join.dateComplete,
                dateStart: join.dateStart,
                progress: join.progress,
                GPA: join.GPA
            })
            .from(join)

            return {
                data: joins,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getJoinById(courseId: number, studentId: number){
        try {
            const joinData = await db.select({
                courseId: join.courseId,
                studentId: join.studentId,
                dateComplete: join.dateComplete,
                dateStart: join.dateStart,
                progress: join.progress,
                GPA: join.GPA
            })
            .from(join)
            .where(and(eq(join.courseId, courseId), eq(join.studentId, studentId)))

            if (joinData.length === 0) {
                return {
                    data: "Join not found",
                    status: 404
                }
            }
            return {
                data: joinData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getJoinByCourseId(courseId: number){
        try {
            const joinData = await db.select({
                courseId: join.courseId,
                studentId: join.studentId,
                dateComplete: join.dateComplete,
                dateStart: join.dateStart,
                progress: join.progress,
                GPA: join.GPA
            })
            .from(join)
            .where(eq(join.courseId, courseId))

            if (joinData.length === 0) {
                return {
                    data: "Join not found",
                    status: 404
                }
            }
            return {
                data: joinData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getJoinByStudentId(studentId: number){
        try {
            const joinData = await db.select({
                courseId: join.courseId,
                studentId: join.studentId,
                dateComplete: join.dateComplete,
                dateStart: join.dateStart,
                progress: join.progress,
                GPA: join.GPA,
                courseName: course.name,
                description: course.description,
                price: course.price,
                creationTime: course.creTime,
                teacherId: course.teacherId,
                teacherFirstName: user.firstName,
                teacherLastName: user.lastName,
            })
            .from(join)
            .leftJoin(course, eq(join.courseId, course.id))
            .where(eq(join.studentId, studentId))
            .leftJoin(user, eq(course.teacherId, user.id))
            if (joinData.length === 0) {
                return {
                    data: "Join not found",
                    status: 404
                }
            }
            return {
                data: joinData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async createJoin(joinDto: joinDto){
        try {
            // check if exists
            const checkJoin = await db.select({
                courseId: join.courseId,
                studentId: join.studentId
            })
            .from(join)
            .where(and(eq(join.courseId, joinDto.courseId), eq(join.studentId, joinDto.studentId)))

            if (checkJoin.length > 0) {
                return {
                    data: "Join already exists",
                    status: 400
                }
            }
            console.log(joinDto)
            await db.insert(join).values({
                courseId: joinDto.courseId,
                studentId: joinDto.studentId,
                dateComplete: joinDto.dateComplete,
                dateStart: joinDto.dateStart,
                progress: joinDto.progress,
                GPA: joinDto.GPA
            })

            console.log("Join created")
            return {
                message: "Join created",
                status: 201
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async updateJoin(joinDto: joinDto){
        try {
            // check if exists
            const checkJoin = await db.select({
                courseId: join.courseId,
                studentId: join.studentId
            })
            .from(join)
            .where(and(eq(join.courseId, joinDto.courseId), eq(join.studentId, joinDto.studentId)))

            if (checkJoin.length === 0) {
                return {
                    data: "Join not found",
                    status: 404
                }
            }

            await db.update(join)
            .set({
                dateComplete: joinDto.dateComplete,
                dateStart: joinDto.dateStart,
                progress: joinDto.progress,
                GPA: joinDto.GPA
            })
            .where(and(eq(join.courseId, joinDto.courseId), eq(join.studentId, joinDto.studentId)))

            return {
                data: "Join updated",
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async deleteJoin(courseId: number, studentId: number){
        try {
            // check if exists
            const checkJoin = await db.select({
                courseId: join.courseId,
                studentId: join.studentId
            })
            .from(join)
            .where(and(eq(join.courseId, courseId), eq(join.studentId, studentId)))

            if (checkJoin.length === 0) {
                return {
                    data: "Join not found",
                    status: 404
                }
            }

            await db.delete(join)
            .where(and(eq(join.courseId, courseId), eq(join.studentId, studentId)))

            return {
                data: "Join deleted",
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }
}

export default new joinService();