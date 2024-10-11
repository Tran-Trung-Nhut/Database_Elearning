    import { db } from "../db/db"
    import { user } from "../db/schema"
    import { eq } from "drizzle-orm"

    const bcrypt = require('bcrypt')
    const saltRounds = 10

    class UserService{
        public getAllUsers = async () =>{
            const all = await db
            .select({
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                email: user.email,
                phonenumber: user.phonenumber,
                degree: user.degree,
            })
            .from(user)

            return all;
        }

        public getUserById = async (id: string) => {
            const data = await db
            .select({
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                email: user.email,
                phonenumber: user.phonenumber,
                degree: user.degree,
            })
            .from(user)
            .where(eq(user.id, id))

            return data;
        }

        public getUserByIdWithPassword = async (id: string) => {
            const data = await db
            .select()
            .from(user)
            .where(eq(user.id, id))

            return data;
        }


        public createNewUser = async (
            name: string, 
            email: string, 
            username: string, 
            password: string, 
            role: string, 
            phonenumber: string, 
            degree: string) => {
            
            const hashedPassword = await bcrypt.hash(password, saltRounds)

            const newUser = await db
            .insert(user)
            .values({name,
                email,
                username,
                password: hashedPassword,
                role,
                phonenumber,
                degree})
            .returning({
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                email: user.email,
                phonenumber: user.phonenumber,
                degree: user.degree,
            })

            return newUser
        }

        public updateUser = async (
            id: string,
            name: string,
            email: string,
            username: string,
            password: string,
            phonenumber: string,
            role: string,
            degree: string,
            hashedPassword: string
        ) => {

            let changedPassword = hashedPassword

            if(!password && password !== ''){
                changedPassword = await bcrypt.hash(password, saltRounds)
            }

            const data = await db
            .update(user)
            .set({
                name,
                email,
                username,
                password: changedPassword,
                phonenumber,
                role,
                degree
                })
            .where(eq(user.id, id))
            .returning({
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                email: user.email,
                phonenumber: user.phonenumber,
                degree: user.degree,
            })

            return data
        }

        public deleteUser= async (id: string) => {
            const data = await db
            .delete(user)
            .where(eq(user.id,id))
            .returning({
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                email: user.email,
                phonenumber: user.phonenumber,
                degree: user.degree,
            })

            return data
        }

        public getUserByUsername = async (username: string) => {
            const data = await db
            .select()
            .from(user)
            .where(eq(user.username,username))
            .limit(1)
            
            return data[0]
        }

    }

    export default new UserService()