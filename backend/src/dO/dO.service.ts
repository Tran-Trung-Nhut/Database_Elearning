import { and, eq } from "drizzle-orm";
import { db } from "../db/db";
import { dO } from "../db/schema";
import { dODto } from "../dtos/dO.dto";

class dOService {
    public async getDOByQuizId(quizId: string){
        try {
            const dOData = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId,
                score: dO.score,
                attemptOrder: dO.attemptOrder
            })
            .from(dO)
            .where(eq(dO.quizId, quizId))

            if (dOData.length === 0) {
                return {
                    message: "DO not found",
                    status: 404
                }
            }
            return {
                data: dOData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getDOByStudentId(studentId: string){
        try {
            const dOData = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId,
                score: dO.score,
                attemptOrder: dO.attemptOrder
            })
            .from(dO)
            .where(eq(dO.studentId, studentId))

            if (dOData.length === 0) {
                return {
                    message: "DO not found",
                    status: 404
                }
            }
            return {
                data: dOData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getAllDO(){
        try {
            const dOData = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId,
                score: dO.score,
                attemptOrder: dO.attemptOrder
            })
            .from(dO)

            return {
                data: dOData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async getDOByQuizIdAndStudentId(quizId: string, studentId: string){
        try {
            const dOData = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId,
                score: dO.score,
                attemptOrder: dO.attemptOrder
            })
            .from(dO)
            .where(and(eq(dO.quizId, quizId), eq(dO.studentId, studentId)))

            if (dOData.length === 0) {
                return {
                    message: "DO not found",
                    status: 404
                }
            }
            return {
                data: dOData,
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async createDO(dODto: dODto){
        try {
            // check if the DO already exists
            const checkDO = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId
            })
            .from(dO)
            .where(and(eq(dO.quizId, dODto.quizId), eq(dO.studentId, dODto.studentId)))

            if (checkDO.length > 0) {
                return {
                    data: "DO already exists",
                    status: 409
                }
            }

            await db.insert(dO).values({
                quizId: dODto.quizId,
                studentId: dODto.studentId,
                score: dODto.score,
                attemptOrder: dODto.attemptOrder
            })
            return {
                mesage: "DO created successfully",
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async updateDO(dODto: dODto){
        try {
            // check if the DO exists
            const checkDO = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId
            })
            .from(dO)
            .where(and(eq(dO.quizId, dODto.quizId), eq(dO.studentId, dODto.studentId)))

            if (checkDO.length === 0) {
                return {
                    message: "DO not found",
                    status: 404
                }
            }
            await db.update(dO)
            .set({
                score: dODto.score,
                attemptOrder: dODto.attemptOrder
            })
            .where(and(eq(dO.quizId, dODto.quizId), eq(dO.studentId, dODto.studentId)))


            return {
                message: "DO updated successfully",
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                status: 500
            }
        }
    }

    public async deleteDO(quizId: string, studentId: string){
        try {
            // check if the DO exists
            const checkDO = await db.select({
                quizId: dO.quizId,
                studentId: dO.studentId
            })
            .from(dO)
            .where(and(eq(dO.quizId, quizId), eq(dO.studentId, studentId)))

            if (checkDO.length === 0) {
                return {
                    message: "DO not found",
                    status: 404
                }
            }
            await db.delete(dO)
            .where(and(eq(dO.quizId, quizId), eq(dO.studentId, studentId)))

            return {
                message: "DO deleted successfully",
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

export default new dOService();