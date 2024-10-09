    import { db } from "../db/db"
    import { user } from "../db/schema"
    import { eq } from "drizzle-orm"

    class UserService{
        public getAllUsers = async () =>{
            const all = await db.select().from(user)

            return all;
        }

        public getUserById = async (id: string) => {
            const data = await db.select().from(user).where(eq(user.id, id))

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

            const newUser = await db.insert(user).values({name, email, username, password, role, phonenumber, degree}).returning()

            return newUser
        }

        public updateUser = async (id: string, name: string, email: string) => {
            const data = await db
            .update(user)
            .set({name, email})
            .where(eq(user.id, id))
            .returning()

            return data
        }

        public deleteUser= async (id: string) => {
            const data = await db
            .delete(user)
            .where(eq(user.id,id))
            .returning()

            return data
        }

    }

    export default new UserService()