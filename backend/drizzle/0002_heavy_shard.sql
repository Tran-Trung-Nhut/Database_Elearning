ALTER TABLE "teacher_qualification" RENAME TO "teacherQualification";--> statement-breakpoint
ALTER TABLE "student" RENAME COLUMN "enrollment_date" TO "enrollmentDate";--> statement-breakpoint
ALTER TABLE "student" RENAME COLUMN "number_courses_enrolled" TO "numberCoursesEnrolled";--> statement-breakpoint
ALTER TABLE "student" RENAME COLUMN "number_courses_completed" TO "numberCoursesCompleted";--> statement-breakpoint
ALTER TABLE "teacherQualification" RENAME COLUMN "teacher_id" TO "teacherId";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "first_name" TO "firstName";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "last_name" TO "lastName";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "user_name" TO "username";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "bank_name" TO "bankName";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "bank_account" TO "bankAccount";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_user_name_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");