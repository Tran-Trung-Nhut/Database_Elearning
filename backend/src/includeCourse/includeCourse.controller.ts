import includeCourseService from "./includeCourse.service";
import { Request, Response } from "express";
class includeCourseController {
    public async getAllIncludeCourse(req: Request, res: Response) {
        try {
            const All = await includeCourseService.getAllIncludeCourse();

            return res.status(All.status).send(All);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getIncludeCourseById(req: Request, res: Response) {
        try {
            const All = await includeCourseService.getIncludeCourseById(req.params.rmId, req.params.courseId);

            return res.status(All.status).send(All);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async createIncludeCourse(req: Request, res: Response) {
        try {
            await includeCourseService.createIncludeCourse(req.body);

            return res.status(201).send();
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateIncludeCourse(req: Request, res: Response) {
        try {
            await includeCourseService.updateIncludeCourse(req.body);

            return res.status(200).send();
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }
    public async  deleteIncludeCourse(req: Request, res: Response) {
        try {
            await includeCourseService.deleteIncludeCourse(req.params.rmId, req.params.courseId);

            return res.status(200).send();
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

}

export default new includeCourseController();