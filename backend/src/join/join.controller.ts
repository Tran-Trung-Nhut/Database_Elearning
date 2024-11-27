import { Request, Response } from 'express';
import joinService from './join.service';
class joinController {
    public async getJoins(req: Request, res: Response) {
        try {
            const response = await joinService.getAllJoin();

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getJoinById(req: Request, res: Response) {
        try {
            const response = await joinService.getJoinById(req.params.courseId, req.params.studentId);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getJoinByCourseId(req: Request, res: Response) {
        try {
            const response = await joinService.getJoinByCourseId(req.params.courseId);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getJoinByStudentId(req: Request, res: Response) {
        try {
            const response = await joinService.getJoinByStudentId(req.params.studentId);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async createJoin(req: Request, res: Response) {
        try {
            const response = await joinService.createJoin(req.body);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateJoin(req: Request, res: Response) {
        try {
            const response = await joinService.updateJoin(req.body);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteJoin(req: Request, res: Response) {
        try {
            const response = await joinService.deleteJoin(req.params.courseId, req.params.studentId);

            return res.status(response.status).send(response);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }
}

export default new joinController();