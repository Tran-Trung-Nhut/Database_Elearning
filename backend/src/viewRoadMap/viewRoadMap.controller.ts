import viewRoadMapService from "./viewRoadMap.service";
import { Request, Response } from "express";
class viewRoadMapController{
    public async getAllRoadMap(req: Request, res: Response){
        try {
            const all = await viewRoadMapService.getAllRoadMap();
            return res.status(all.status).send(all);
            
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getRoadMapById(req: Request, res: Response){
        try {
            const roadMap = await viewRoadMapService.getRoadMapById(req.params.rmId);
            return res.status(roadMap.status).send(roadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }    
    }

    public async getRoadMapByStudentId(req: Request, res: Response){
        try {
            const roadMap = await viewRoadMapService.getRoadMapByStudentId(req.params.studentId);
            return res.status(roadMap.status).send(roadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async getRoadMapByStudentIdAndRmId(req: Request, res: Response){
        try {
            const roadMap = await viewRoadMapService.getRoadMapByStudentIdAndRoadMapId(req.params.studentId, req.params.rmId);
            return res.status(roadMap.status).send(roadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async createRoadMap(req: Request, res: Response){
        try {
            const roadMap = req.body;
            const newRoadMap = await viewRoadMapService.createRoadMap(roadMap);
            return res.status(newRoadMap.status).send(newRoadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async updateRoadMap(req: Request, res: Response){
        try {
            const roadMap = req.body;
            const updatedRoadMap = await viewRoadMapService.updateRoadMap(roadMap);
            return res.status(updatedRoadMap.status).send(updatedRoadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }

    public async deleteRoadMap(req: Request, res: Response){
        try {
            const deletedRoadMap = await viewRoadMapService.deleteRoadMap(req.params.rmId, req.params.studentId);
            return res.status(deletedRoadMap.status).send(deletedRoadMap);
        } catch (error) {
            return {
                message: error,
                status: 500
            }
        }
    }
}

export default new viewRoadMapController();