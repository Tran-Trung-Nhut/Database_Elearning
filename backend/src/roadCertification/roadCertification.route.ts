import exp from "constants";
import { Router } from "express";
import roadcertificationController from "./roadCertification.controller";
const router = Router();

router.get('/', roadcertificationController.getALLRoadCertification as any);

router.get('/:id', roadcertificationController.getRoadCertificationById as any);
export default router;