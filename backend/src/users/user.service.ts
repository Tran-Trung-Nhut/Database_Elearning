    import { db } from "../db/db"
    import { users } from "../db/schema"
    import { eq } from "drizzle-orm"

    class UserService{
        public getAllUsers = async () =>{
            const all = await db.select().from(users)

            return all;
        }

        public getUserById = async (id: string) => {
            const user = await db.select().from(users).where(eq(users.id, id))

            return user;
        }

        public createNewUser = async (name: string, email: string) => {
            const newUser = await db.insert(users).values({name, email}).returning()

            return newUser
        }

        public updateUser = async (id: string, name: string, email: string) => {
            const user = await db
            .update(users)
            .set({name, email})
            .where(eq(users.id, id))
            .returning()

            return user
        }

        public deleteUser= async (id: string) => {
            const user = await db
            .delete(users)
            .where(eq(users.id,id))
            .returning()

            return user
        }

    }

    export default new UserService()