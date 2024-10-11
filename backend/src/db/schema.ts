import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: uuid("id").defaultRandom().primaryKey(),
    username: varchar("username", {length: 255}).notNull().unique(),
    password: varchar("password", {length: 255}).notNull(),
    role: varchar("role", {length: 255}).notNull(),
    name: varchar("name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull(),
    phonenumber: varchar("phonenumber", {length: 255}).notNull(),
    degree: varchar("degree", {length: 255}),
})

export const course = pgTable("course", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 255}).notNull(),
    price: integer("price").notNull(),
    topic: varchar("name", {length: 255}).notNull(),
    levelrequirement: varchar("levelrequirement", {length: 255}).notNull(),
    description: varchar("description", {length: 255}),
    paymentcode: varchar("paymentcode", {length: 255}).notNull(),
})