import { and, eq } from "drizzle-orm";
import { db } from "../db/db";
import { requireCourse } from "../db/schema";

class requireCourseService {
    public async getAllRequireCourses() {
        try {
            const requireCourses = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)

            return {
                message: "Get all requireCourses",
                status: 200,
                data: requireCourses
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getRequireCourseById(courseId: string) {
        try {
            const requireCourses = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)
            .where(eq(requireCourse.courseId, courseId))    

            return {
                message: "Get requireCourse by id",
                status: 200,
                data: requireCourses
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async insertRequireCourse(courseId: string, rCourseId: string) {
        try{
            // first find requireCourse that has courseId and rCourseId
            const insertedRequireCourse = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)
            .where(and(eq(requireCourse.courseId, courseId), eq(requireCourse.rCourseId, rCourseId)))

            if (insertedRequireCourse.length > 0){
                return {
                    message: "RequireCourse already exists",
                    status: 400
                }
            }
            await db.insert(
                requireCourse
            )
            .values({
                courseId: courseId,
                rCourseId: rCourseId
            })

            return {
                message: "Inserted requireCourse",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateRequireCourse(courseId: string, rCourseId: string, newRCourseId: string) {
        try {
            // first find requireCourse that has courseId and rCourseId
            const requireCourses = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)
            .where(and(eq(requireCourse.courseId, courseId), eq(requireCourse.rCourseId, rCourseId)))

            if (requireCourses.length == 0){
                return {
                    message: "RequireCourse not found",
                    status: 400
                }
            }

            // update requireCourse that has courseId and rCourseId
            await db.update(requireCourse)
            .set({
                rCourseId: newRCourseId
            })
            .where(and(eq(requireCourse.courseId, courseId), eq(requireCourse.rCourseId, rCourseId)))

            return {
                message: "Updated requireCourse",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteRequireCourse(courseId: string, rCourseId: string) {
        try {
            // first find requireCourse that has courseId and rCourseId
            const requireCourses = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)
            .where(and(eq(requireCourse.courseId, courseId), eq(requireCourse.rCourseId, rCourseId)))

            if (requireCourses.length == 0){
                return {
                    message: "RequireCourse not found",
                    status: 400
                }
            }
            // delete requireCourse that has courseId and rCourseId
            await db.delete(requireCourse)
            .where(and(eq(requireCourse.courseId, courseId), eq(requireCourse.rCourseId, rCourseId)))
            return {
                message: "Deleted requireCourse",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteRequireCourseById(courseId: string) {
        try {
            // first find requireCourse that has courseId
            const requireCourses = await db.select({
                courseId: requireCourse.courseId,
                rCourseId: requireCourse.rCourseId
            })
            .from(requireCourse)
            .where(eq(requireCourse.courseId, courseId))

            if (requireCourses.length == 0){
                return {
                    message: "RequireCourse not found",
                    status: 400
                }
            }
            // delete requireCourse that has courseId
            await db.delete(requireCourse)
            .where(eq(requireCourse.courseId, courseId))
            return {
                message: "Deleted requireCourse by id",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteAllRequireCourses() {
        try {
            await db.delete(requireCourse)
            return {
                message: "Deleted all requireCourses",
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

export default new requireCourseService();