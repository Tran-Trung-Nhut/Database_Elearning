import { pgTable, uuid, date, integer, varchar, text, unique, primaryKey } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 255}).notNull().unique(),
    firstName: varchar("firstName", { length: 10}).notNull(),
    lastName: varchar("lastName", { length: 30}).notNull(),
    username: varchar("username", { length: 30}).notNull().unique(),
    password: varchar("password", { length: 255}).notNull().unique(),
    role: varchar("role", { length: 255}).notNull(),
    bankName: varchar("bankName", { length: 20}).notNull(),
    bankAccount: varchar("bankAccount", { length: 255}).notNull()
});

export const student = pgTable("student", {
    userId: uuid("userId").notNull().references(() => user.id).primaryKey(),
    studentId: varchar("studentId", { length: 255 }).notNull().unique(),
    enrollmentDate: date("enrollmentDate").notNull(),
    numberCoursesEnrolled: integer("numberCoursesEnrolled").notNull().default(0),
    numberCoursesCompleted: integer("numberCoursesCompleted").notNull().default(0),
})

export const teacher = pgTable("teacher", {
    userId: uuid('userId').notNull().references(() => user.id).primaryKey(),
    teacherId: varchar('teacherId', { length: 255}).notNull().unique(),
})

export const teacherQualification = pgTable('teacherQualification', {
    teacherId: varchar('teacherId', { length: 255 }).notNull(),
    qualification: varchar('qualification', { length: 255 }).notNull()
}, () => ({
    primaryKey: ['teacherId', 'qualification']
}));

export const course = pgTable('course',{
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 80 }).notNull(),
    language: varchar('language', { length: 255}).notNull(),
    description: text('description').notNull(),
    teacherId: uuid('teacherId').notNull().references(() => teacher.userId),
    creTime: date('creTime').notNull().defaultNow(),
    avgQuiz: integer('avgQuiz').notNull().default(0),
    price: integer('price').notNull().default(0)
})

export const courseTopic = pgTable('courseTopic', {
    courseId: uuid('courseId').references(() => course.id).notNull(),
    topic: varchar('topic', { length: 255 }).notNull(),
}, () => ({
    primaryKey: ['courseId','topic']
}))

export const section = pgTable('section',{
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255 }).notNull().unique(),
    numOfLecture: integer('numOfLecture').notNull().default(0),
    timeToComplete: integer('timeTocomplete').notNull().default(12),
    teacherId: uuid('teacherId').notNull().references(() => teacher.userId),
    courseId: uuid('courseId').notNull().references(() => course.id),
    creTime: date('creTime').notNull().defaultNow()
})

export const quiz  = pgTable('quiz', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 512 }).notNull().unique(),
    state: varchar('state', { length: 255}).notNull().default('opened'),
    attempt: integer('attempt').notNull().default(1),
    duration: integer('duration').notNull().default(10),
    teacherId: uuid('teacherId').notNull().references(() => teacher.userId),
    sectionId: uuid('sectionId').notNull().references(() => section.id),
    creTime: date('creTime').notNull().defaultNow()
})

export const question = pgTable('question', {
    id: uuid('id').defaultRandom().unique(),
    quizId: uuid('quizId').notNull().references(() => quiz.id),
    type: varchar('type', { length: 255 }).notNull().default('multiple choice'),
    answer: varchar('answer',{ length: 255 }).notNull(),
    content: text('content').notNull(),
    creTime: date('creTime').notNull().defaultNow(),
    teacherId: uuid('teacherId').notNull().references(() => teacher.userId)
},(table) => ({
    primaryKey: [table.id, table.quizId]
}))

export const option = pgTable('option', {
    questionId: uuid('questionId').notNull().references(() => question.id),
    option: varchar('option', { length: 1024 }).notNull()
},() => ({
    primaryKey: ['questionId', 'option']
}))

export const roadMap = pgTable('roadMap',{
    id: uuid('id').defaultRandom().primaryKey(),
    instruction: text('instruction').notNull(),
    description: text('description'),
    name: varchar('name',{ length: 255 }).notNull(),
    teacherId: uuid('teacherId').notNull().references(() => teacher.userId)
})

export const roadCertification = pgTable('roadCertification',{
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 50}).notNull(),
    expDate: date('expDate'),
    issueDate: date('issueDate').notNull().defaultNow(),
    courseId: uuid('courseId').notNull().references(() => course.id),
    studentId: uuid('studentId').notNull().references(() => student.userId)
})

export const requireCourse = pgTable('requireCours', {
    courseId: uuid('courseId').notNull().references(() => course.id),
    rCourseId: uuid('rCourseId').notNull().references(() => course.id),
},() => ({
    primaryKey: ['courseId', 'rCourseId']
}))

export const certification = pgTable('certification',{
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 50}).notNull(),
    issueDate: date('issueDate').notNull().defaultNow(),
    expDate: date('expDate'),
    courseId: uuid('courseId').notNull().references(() => course.id),
    studentId: uuid('studentId').notNull().references(() => student.userId)
})

export const join = pgTable('join', {
    courseId: uuid('courseId').notNull().references(() => course.id),
    studentId: uuid('studentId').notNull().references(() => student.userId),
    dateComplete: date('dateComplete'),
    dateStart: date('dateStart').notNull().defaultNow(),
    progress: integer('progress').notNull().default(0),
    GPA: integer('GPA')
}, () => ({
    primaryKey: ['courseId','studentId']
}))

export const dO = pgTable('dO', {
    quizId: uuid('quizId').notNull().references(() => quiz.id),
    studentId: uuid('studentId').notNull().references(() => student.userId),
    score: integer('score'),
    attemptOrder: integer('attemptOrder').notNull().default(1)
}, () => ({
    primaryKey: ['quizId','studentId']
}))

export const answerRecord = pgTable('answerRecord', {
    quizId: uuid('quizId').notNull().references(() => quiz.id),
    studentId: uuid('studentId').notNull().references(() => student.userId),
    questionId: uuid('questionId').notNull().references(() => question.id),
    studentAns: text('studentAns')
}, () => ({
    primaryKey: ['quizId', 'studentId']
}))

export const lecture = pgTable('lecture', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255}).notNull().unique(),
    state: varchar('state', { length: 255}).notNull().default('uncomplete'),
    material: varchar('material', { length: 255}),
    reference: varchar('reference', { length: 255 }),
    sectionId: uuid('sectionId').notNull().references(() => section.id)
})

export const interact = pgTable('interact', {
    lectureId: uuid('lectureId').notNull().references(() => lecture.id),
    studentId: uuid('studentId').notNull().references(() => student.userId)
}, () => ({
    primaryKey: ['lectureId','studentId']
}))

export const includeCourse = pgTable('includeCourse', {
    rmId: uuid('rmId').notNull().references(() => roadMap.id),
    courseId: uuid('courseId').notNull().references(() => course.id),
    order: integer('order').notNull()
},() => ({
    primaryKey: ['rmId','courseId']
}))

export const viewRoadMap = pgTable('viewRoadMap',{
    rmId: uuid('rmId').notNull().references(() => roadMap.id),
    studentId: uuid('studentId').notNull().references(() => student.userId),
    suitability: integer('suitability').notNull().default(0),
    timeSuitabilty: integer('timeSuitability').notNull().default(0),
    courseSui: integer('courseSui').notNull().default(0)
})