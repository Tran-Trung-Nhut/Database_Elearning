import { course, teacher } from "../db/schema"
import { db } from "../db/db"
import { eq } from "drizzle-orm"
class CourseService{
    private FormatDate = (date: string) => {
        const dateObj = new Date(date)
        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`
    }
    public getAllCourses = async () => {
        return await db
        .select({
            courseId: course.id,
            courseName: course.name,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
    }
    
    public getCourseById = async (id: string) => {
        return await db
        .select({
            courseId: course.id,
            courseName: course.name,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
        .where(eq(course.id, id))
    }

    public getCourseByName = async (name: string) => {
        return await db
        .select({
            courseId: course.id,
            courseName: course.name,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
        .where(eq(course.name, name))
    }

    public createNewCourse = async (
        courseName: string,
        language: string,
        description: string,
        teacherId: string,
        price: number,
    ) => {
        console.log(this.FormatDate(new Date().toISOString()))
        // find course exist or not
        const courseExist = await this.getCourseByName(courseName)

        if (courseExist && courseExist.length > 0){
            return null
        }
        
        const newCourse = await db.insert(course).values({
            name: courseName,
            language: language,
            description: description,
            teacherId: teacherId,
            creTime: new Date().toISOString(),
            avgQuiz: 0,
            price: price,
        })
        .returning({
            courseId: course.id,
            teacherId: course.teacherId,
        })

        if (!newCourse || newCourse.length === 0){
            return null;
        }


        return {
            courseId: newCourse[0].courseId,
            courseName: courseName,
            description: description,
            teacherId: newCourse[0].teacherId,
            creationTime: new Date().toISOString(),
            avgQuiz: 0,
            price: price,
        }
    }
}

export default new CourseService()