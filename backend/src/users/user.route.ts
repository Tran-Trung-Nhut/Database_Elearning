import { Router } from "express";
import userController from "./user.controller";

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById as any)
router.post('/create', userController.createNewUser)
router.put('/update', userController.updateUser as any)
router.delete('/delete/:id', userController.deleteUser as any)


export default router