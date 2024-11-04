CREATE TABLE IF NOT EXISTS "answerRecord" (
	"quizId" uuid NOT NULL,
	"studentId" uuid NOT NULL,
	"questionId" uuid NOT NULL,
	"studentAns" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "certification" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NOT NULL,
	"issueDate" date DEFAULT now() NOT NULL,
	"expDate" date,
	"courseId" uuid NOT NULL,
	"studentId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "course" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(80) NOT NULL,
	"language" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"teacherId" uuid NOT NULL,
	"creTime" date DEFAULT now() NOT NULL,
	"avgQuiz" integer DEFAULT 0 NOT NULL,
	"price" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "courseTopic" (
	"courseId" uuid NOT NULL,
	"topic" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dO" (
	"quizId" uuid NOT NULL,
	"studentId" uuid NOT NULL,
	"score" integer,
	"attemptOrder" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "includeCourse" (
	"rmId" uuid NOT NULL,
	"courseId" uuid NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "interact" (
	"lectureId" uuid NOT NULL,
	"studentId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "join" (
	"courseId" uuid NOT NULL,
	"studentId" uuid NOT NULL,
	"dateComplete" date,
	"dateStart" date DEFAULT now() NOT NULL,
	"progress" integer DEFAULT 0 NOT NULL,
	"GPA" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lecture" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"state" varchar(255) DEFAULT 'uncomplete' NOT NULL,
	"material" varchar(255),
	"reference" varchar(255),
	"sectionId" uuid NOT NULL,
	CONSTRAINT "lecture_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "option" (
	"questionId" uuid NOT NULL,
	"option" varchar(1024) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question" (
	"id" uuid DEFAULT gen_random_uuid(),
	"quizId" uuid NOT NULL,
	"type" varchar(255) DEFAULT 'multiple choice' NOT NULL,
	"answer" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"creTime" date DEFAULT now() NOT NULL,
	"teacherId" uuid NOT NULL,
	CONSTRAINT "question_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quiz" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(512) NOT NULL,
	"state" varchar(255) DEFAULT 'opened' NOT NULL,
	"attempt" integer DEFAULT 1 NOT NULL,
	"duration" integer DEFAULT 10 NOT NULL,
	"teacherId" uuid NOT NULL,
	"sectionId" uuid NOT NULL,
	"creTime" date DEFAULT now() NOT NULL,
	CONSTRAINT "quiz_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "requireCours" (
	"courseId" uuid NOT NULL,
	"rCourseId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roadCertification" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NOT NULL,
	"expDate" date,
	"issueDate" date DEFAULT now() NOT NULL,
	"courseId" uuid NOT NULL,
	"studentId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roadMap" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"instruction" text NOT NULL,
	"description" text,
	"name" varchar(255) NOT NULL,
	"teacherId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "section" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"numOfLecture" integer DEFAULT 0 NOT NULL,
	"timeTocomplete" integer DEFAULT 12 NOT NULL,
	"teacherId" uuid NOT NULL,
	"courseId" uuid NOT NULL,
	"creTime" date DEFAULT now() NOT NULL,
	CONSTRAINT "section_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "student" (
	"userId" uuid PRIMARY KEY NOT NULL,
	"studentId" varchar(255) NOT NULL,
	"enrollment_date" date NOT NULL,
	"number_courses_enrolled" integer DEFAULT 0 NOT NULL,
	"number_courses_completed" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "student_studentId_unique" UNIQUE("studentId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teacher" (
	"userId" uuid PRIMARY KEY NOT NULL,
	"teacherId" varchar(255) NOT NULL,
	CONSTRAINT "teacher_teacherId_unique" UNIQUE("teacherId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teacher_qualification" (
	"teacher_id" varchar(255) NOT NULL,
	"qualification" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255),
	"first_name" varchar(10),
	"last_name" varchar(30),
	"user_name" varchar(30) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"bank_name" varchar(20),
	"bank_account" varchar(255) NOT NULL,
	CONSTRAINT "user_user_name_unique" UNIQUE("user_name"),
	CONSTRAINT "user_password_unique" UNIQUE("password")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "viewRoadMap" (
	"rmId" uuid NOT NULL,
	"studentId" uuid NOT NULL,
	"suitability" integer DEFAULT 0 NOT NULL,
	"timeSuitability" integer DEFAULT 0 NOT NULL,
	"courseSui" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "public"."question"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course" ADD CONSTRAINT "course_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "courseTopic" ADD CONSTRAINT "courseTopic_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dO" ADD CONSTRAINT "dO_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dO" ADD CONSTRAINT "dO_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "includeCourse" ADD CONSTRAINT "includeCourse_rmId_roadMap_id_fk" FOREIGN KEY ("rmId") REFERENCES "public"."roadMap"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "includeCourse" ADD CONSTRAINT "includeCourse_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "interact" ADD CONSTRAINT "interact_lectureId_lecture_id_fk" FOREIGN KEY ("lectureId") REFERENCES "public"."lecture"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "interact" ADD CONSTRAINT "interact_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join" ADD CONSTRAINT "join_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join" ADD CONSTRAINT "join_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lecture" ADD CONSTRAINT "lecture_sectionId_section_id_fk" FOREIGN KEY ("sectionId") REFERENCES "public"."section"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "option" ADD CONSTRAINT "option_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "public"."question"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quiz" ADD CONSTRAINT "quiz_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quiz" ADD CONSTRAINT "quiz_sectionId_section_id_fk" FOREIGN KEY ("sectionId") REFERENCES "public"."section"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "requireCours" ADD CONSTRAINT "requireCours_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "requireCours" ADD CONSTRAINT "requireCours_rCourseId_course_id_fk" FOREIGN KEY ("rCourseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadCertification" ADD CONSTRAINT "roadCertification_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadCertification" ADD CONSTRAINT "roadCertification_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadMap" ADD CONSTRAINT "roadMap_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "section" ADD CONSTRAINT "section_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "section" ADD CONSTRAINT "section_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "student" ADD CONSTRAINT "student_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teacher" ADD CONSTRAINT "teacher_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "viewRoadMap" ADD CONSTRAINT "viewRoadMap_rmId_roadMap_id_fk" FOREIGN KEY ("rmId") REFERENCES "public"."roadMap"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "viewRoadMap" ADD CONSTRAINT "viewRoadMap_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
