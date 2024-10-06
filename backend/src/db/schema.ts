import { varchar } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull()
})