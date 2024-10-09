import { Request, Response } from "express"
import userService from "./user.service"

class UserController {

    public getAllUsers = async (req: Request, res: Response) => {
        try{ 
            const all = await userService.getAllUsers()

            res.status(200).json({
                message: "Success",
                data: all
            })
        }catch(e){
            res.status(500).json({
                message:e
            })
        }
    }

    public getUserById = async (req: Request, res: Response) => {
            try{
                const {id} = req.params

                const user = await userService.getUserById(id)

                if(!user){
                    return res.status(404).json({
                        message: "User not found",
                    })
                }

                return res.status(404).json({
                    message: "Success",
                    data: user
                })
            }catch(e){
                return res.status(500).json({
                    message:e
                })
            }
    }

    public createNewUser = async (req: Request, res:Response) => {
        try{
            const {name, email, username, password, role, phonenumber, degree} = req.body

            const newUser = await userService.createNewUser(name, email, username, password, role, phonenumber, degree);

            res.status(200).json({
                message: "Success",
                data: newUser
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        try{
            const {id, name, email} = req.body

            const existUser = await userService.getUserById(id)

            if(!existUser) {
                return res.status(404).json({
                    message: "User does not exist"
                })
            }

            const user = await userService.updateUser(id, name, email)

            return res.status(200).json({
                message: "Success",
                data: user
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }

    public deleteUser = async (req: Request, res: Response,) => {
        try{
            const { id } = req.params

            const existUser = await userService.getUserById(id)

            if(!existUser){
                return res.status(404).json({
                    message: "User does not exist"
                })
            }

            const user = await userService.deleteUser(id)

            return res.status(404).json({
                message: "Success",
                data: user
            })
        }catch(e){
            res.status(500).json({
                message: e
            })
        }
    }
}

export default new UserController();