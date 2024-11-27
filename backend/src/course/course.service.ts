import { course, teacher } from "../db/schema"
import { db } from "../db/db"
import { and, eq } from "drizzle-orm"
import  teacherService  from "../teacher/teacher.service"
import courseTopicService from "../courseTopic/courseTopic.service"
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
            languege: course.language,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
    }
    
    public getCourseById = async (id: string) => {

        const returnCourse = await db
        .select({
            courseId: course.id,
            courseName: course.name,
            language: course.language,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
        .where(eq(course.id, id))

        if (!returnCourse || returnCourse.length === 0){
            return null
        }

        return returnCourse[0]
    }

    public getCourseByName = async (name: string) => {
        const courseByName = await db
        .select({
            courseId: course.id,
            courseName: course.name,
            language: course.language,
            description: course.description,
            teacherId: course.teacherId,
            creationTime: course.creTime,
            avgQuiz: course.avgQuiz,
            price: course.price,
        })
        .from(course)
        .where(eq(course.name, name))

        if (!courseByName || courseByName.length === 0){
            return null
        }

        return courseByName[0]
    }

    public createNewCourse = async (
        courseName: string,
        language: string,
        description: string,
        teacherId: string,
        price: number,
    ) => {
        try {
            // check if course already exist
            const courseExist = await db.select({})
                                        .from(course)
                                        .where(and(eq(course.name, courseName), 
                                                   eq(course.teacherId, teacherId)))
            
            if (courseExist.length !== 0){
                return {
                    message: "Course already exist",
                    status: 400
                }
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

            return {
                message: "Successfully created new course",
                status: 200,
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
            
        }
    }

    public deleteCourseById = async (id: string) => {
        const courseExist = await this.getCourseById(id)
        if (!courseExist){
            return null
        }

        // delete all course topic of this course first
        courseTopicService.deleteAllCourseTopicsInThisCourse(id);

        const deletedCourse = await db.delete(course).where(eq(course.id, id))
        if (!deletedCourse){
            return null
        }

        return courseExist
    }

    public deleteCourseByName = async (name: string) => {
        const courseExist = await this.getCourseByName(name)
        if (!courseExist){
            return null
        }
        // delete all course topics in this course
        courseTopicService.deleteAllCourseTopicsInThisCourse(courseExist.courseId)
        const deletedCourse = await db.delete(course).where(eq(course.name, name))
        if (!deletedCourse){
            return null
        }

        return courseExist
    }

    public updateCourseById = async (
        id: string,
        courseName: string,
        language: string,
        description: string,
        avgQuiz: number,
        price: number,
    ) => {
        const courseExist = await this.getCourseById(id)
        if (!courseExist){
            return null
        }

        const updatedCourse = await db.update(course)
        .set({
            name: courseName? courseName: courseExist.courseName,
            language: language? language: courseExist.language,
            description: description? description: courseExist.description,
            price: price? price: courseExist.price,
            avgQuiz: avgQuiz? avgQuiz: courseExist.avgQuiz,
        })
        .returning({
            teacherId: course.teacherId,
            price: course.price,
            avgQuiz: course.avgQuiz,
            language: course.language,
            name: course.name,
            description: course.description,
            creTime: course.creTime,
            id: course.id,
        })
        .where(eq(course.id, id))

        if (!updatedCourse){
            return null
        }

        return {
            courseId: updatedCourse[0].id,
            courseName: updatedCourse[0].name,
            language: updatedCourse[0].language,
            description: updatedCourse[0].description,
            teacherId: updatedCourse[0].teacherId,
            creationTime: updatedCourse[0].creTime,
            avgQuiz: updatedCourse[0].avgQuiz,
            price: updatedCourse[0].price,
        }
    }

    public updateCourseByName = async (
        name: string,
        newName: string,
        language: string,
        description: string,
        avgQuiz: number,
        price: number,

    ) => {
        const courseExist = await this.getCourseByName(name)
        if (!courseExist){
            return null
        }

        const updatedCourse = await db.update(course)
        .set({
            name: newName? newName: courseExist.courseName,
            language: language? language: courseExist.language,
            description: description? description: courseExist.description,
            price: price? price: courseExist.price,
            avgQuiz: avgQuiz? avgQuiz: courseExist.avgQuiz
        })
        .returning({
            teacherId: course.teacherId,
            price: course.price,
            avgQuiz: course.avgQuiz,
            language: course.language,
            name: course.name,
            description: course.description,
            creTime: course.creTime,
            id: course.id,
        })
        .where(eq(course.name, name))

        if (!updatedCourse){
            return null
        }

        return {
            courseId: updatedCourse[0].id,
            courseName: updatedCourse[0].name,
            language: updatedCourse[0].language,
            description: updatedCourse[0].description,
            teacherId: updatedCourse[0].teacherId,
            creationTime: updatedCourse[0].creTime,
            avgQuiz: updatedCourse[0].avgQuiz,
            price: updatedCourse[0].price,
        }


    }
}

export default new CourseService()