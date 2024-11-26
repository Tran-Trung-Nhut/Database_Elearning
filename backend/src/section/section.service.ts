import { time } from "console";
import { db } from "../db/db";
import { course, section, teacher } from "../db/schema";
import { eq } from "drizzle-orm";

class sectionService{
    public async getSectionById(id : string){
        try {
            const sectionById = await db.select({
                id: section.id,
                name: section.name, 
                numOfLecture: section.numOfLecture,
                timeToComplete: section.timeToComplete,
                teacherId: section.teacherId,
                courseId: section.courseId,
                creTime: section.creTime
            })
            .from(section)
            .where(eq(section.id, id))

            if (sectionById.length === 0){
                return {
                    message: "Section not found",
                    status: 404
                }
            }
            return {
                message: "Section fetched successfully",
                data: sectionById,
                status: 200
            }
        } catch (error) {
            console.log(error)
            return{
                message: error,
                status: 500
            }
        }
    }

    public async getSections(){
        try {
            const sections = await db.select({
                id: section.id,
                name: section.name, 
                numOfLecture: section.numOfLecture,
                timeToComplete: section.timeToComplete,
                teacherId: section.teacherId,
                courseId: section.courseId,
                creTime: section.creTime
            })
            .from(section)

            return {
                message: "Sections fetched successfully",
                data: sections,
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getSectionsInCourse(courseId: string){
        try {
            const sections = await db.select({
                id: section.id,
                name: section.name, 
                numOfLecture: section.numOfLecture,
                timeToComplete: section.timeToComplete,
                teacherId: section.teacherId,
                courseId: section.courseId,
                creTime: section.creTime
            })
            .from(section)
            .where(eq(section.courseId, courseId))

            if (sections.length === 0){
                return {
                    message: "No sections found",
                    status: 404
                }
            }
            return {
                message: "Sections fetched successfully",
                data: sections,
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }
    public async createSection(name: string, numOfLecture: number, timeToComplete: number, teacherId: string, courseId: string){
        try {
            // check if section exists
            const sectionExists = await db.select({
                id: section.id
            })
            .from(section)
            .where(eq(section.name, name))

            if (sectionExists.length > 0){
                return {
                    message: "Section already exists",
                    status: 409
                }
            }
            const newSection = await db.insert(section)
                                        .values({
                                            name: name,
                                            numOfLecture: numOfLecture,
                                            timeToComplete: timeToComplete,
                                            teacherId: teacherId,
                                            courseId: courseId
                                        })
            
            return {
                message: "Section created successfully",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateSection(id: string, name: string, numOfLecture: number, timeToComplete: number, teacherId: string, courseId: string){
        try {
            const sectionExists = await db.select({
                id: section.id,
                numOfLecture: section.numOfLecture,
                timeToComplete: section.timeToComplete,
                teacherId: section.teacherId,
                courseId: section.courseId,
            })
            .from(section)
            .where(eq(section.id, id))

            if (sectionExists.length === 0){
                return {
                    message: "Section not found",
                    status: 404
                }
            }

            const updatedSection = await db.update(section)
                                        .set({
                                            name: name,
                                            numOfLecture: numOfLecture? numOfLecture : sectionExists[0].numOfLecture,
                                            timeToComplete: timeToComplete ? timeToComplete : sectionExists[0].timeToComplete,
                                            teacherId: teacherId ? teacherId : sectionExists[0].teacherId,
                                            courseId: courseId? courseId : sectionExists[0].courseId
                                        })
                                        .where(eq(section.id, id))
            
            return {
                message: "Section updated successfully",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public deleteSection = async (id: string) => {
        try {
            const sectionExists = await db.select({
                id: section.id
            })
            .from(section)
            .where(eq(section.id, id))

            if (sectionExists.length === 0){
                return {
                    message: "Section not found",
                    status: 404
                }
            }

            const deletedSection = await db.delete(section)
                                        .where(eq(section.id, id))

            return {
                message: "Section deleted successfully",
                status: 200
            }
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteSectionsInCourse(courseId: string){
        try {
            const sections = await db.select({
                id: section.id
            })
            .from(section)
            .where(eq(section.courseId, courseId))

            console.log(sections)
            console.log(courseId)
            if (sections.length === 0){
                return {
                    message: "No sections found",
                    status: 404
                }
            }

            const deletedSections = await db.delete(section)
                                        .where(eq(section.courseId, courseId))

            return {
                message: "Sections deleted successfully",
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

export default new sectionService();