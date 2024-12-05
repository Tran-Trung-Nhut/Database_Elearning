import { and, eq } from "drizzle-orm";
import { db } from "../db/db";
import { includeCourse } from "../db/schema";
import { includeCourseDto } from "../dtos/includeCourse.dto";

class includeCourseService {
    public async getAllIncludeCourse(){
        try {
            const All = await db.select({
                rmId: includeCourse.rmId,
                courseId: includeCourse.courseId,
                order: includeCourse.order
            })
            .from(includeCourse)

            return {
                data: All,
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getIncludeCourseById(rmId: number, courseId: number){
        try {
            const All = await db.select({
                rmId: includeCourse.rmId,
                courseId: includeCourse.courseId,
                order: includeCourse.order
            })
            .from(includeCourse)
            .where(and(eq(includeCourse.rmId, rmId), eq(includeCourse.courseId, courseId)))

            return {
                data: All,
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async createIncludeCourse(includeCourseDto: includeCourseDto){
        try {
            await db.insert(
                includeCourse
            )
            .values({
                rmId: includeCourseDto.rmId,
                courseId: includeCourseDto.courseId,
                order: includeCourseDto.order
            })

            return {
                message: "IncludeCourse created",
                status: 201
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateIncludeCourse(includeCourseDto: includeCourseDto){
        try {
            await db.update(includeCourse)
            .set({
                order: includeCourseDto.order
            })
            .where(and(eq(includeCourse.rmId, includeCourseDto.rmId), eq(includeCourse.courseId, includeCourseDto.courseId)))

            return {
                message: "IncludeCourse updated",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteIncludeCourse(rmId: number, courseId: number){
        try {
            await db.delete(includeCourse)
            .where(and(eq(includeCourse.rmId, rmId), eq(includeCourse.courseId, courseId)))

            return {
                message: "IncludeCourse deleted",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

}

export default new includeCourseService();