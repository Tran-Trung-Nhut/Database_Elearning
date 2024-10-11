import { date, integer, varchar } from "drizzle-orm/pg-core";
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

export const payment = pgTable("payment",{
    id: uuid("id").defaultRandom().primaryKey(),
    method: varchar("method", {length: 255}),
    date: date("date").defaultNow().notNull(),
    studentID: uuid("studentID").references(() => user.id).notNull()
})

export const course = pgTable("course", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 255}).notNull(),
    price: integer("price").notNull(),
    topic: varchar("name", {length: 255}).notNull(),
    levelrequirement: varchar("levelrequirement", {length: 255}).notNull(),
    description: varchar("description", {length: 255}),
    lecturerID: uuid("lecturerID").references(() => user.id).notNull(),
    paymentID: uuid("paymentID").references(() => payment.id).notNull()
})

export const certification = pgTable("certification", {
    id: uuid("id").defaultRandom().primaryKey(),
    date: date("date").defaultNow().notNull(),
    issuerID: uuid("issuerID").references(() => user.id).notNull(),
    recipientID: uuid("recipientID").references(() => user.id).notNull(),
    courseID: uuid("courseID").references(() => course.id)
})