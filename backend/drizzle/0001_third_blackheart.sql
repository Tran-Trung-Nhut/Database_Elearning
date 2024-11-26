ALTER TABLE "answerRecord" DROP CONSTRAINT "answerRecord_quizId_quiz_id_fk";
--> statement-breakpoint
ALTER TABLE "answerRecord" DROP CONSTRAINT "answerRecord_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "answerRecord" DROP CONSTRAINT "answerRecord_questionId_question_id_fk";
--> statement-breakpoint
ALTER TABLE "certification" DROP CONSTRAINT "certification_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "certification" DROP CONSTRAINT "certification_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "courseTopic" DROP CONSTRAINT "courseTopic_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "dO" DROP CONSTRAINT "dO_quizId_quiz_id_fk";
--> statement-breakpoint
ALTER TABLE "dO" DROP CONSTRAINT "dO_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "includeCourse" DROP CONSTRAINT "includeCourse_rmId_roadMap_id_fk";
--> statement-breakpoint
ALTER TABLE "includeCourse" DROP CONSTRAINT "includeCourse_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "interact" DROP CONSTRAINT "interact_lectureId_lecture_id_fk";
--> statement-breakpoint
ALTER TABLE "interact" DROP CONSTRAINT "interact_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "join" DROP CONSTRAINT "join_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "join" DROP CONSTRAINT "join_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "lecture" DROP CONSTRAINT "lecture_sectionId_section_id_fk";
--> statement-breakpoint
ALTER TABLE "option" DROP CONSTRAINT "option_questionId_question_id_fk";
--> statement-breakpoint
ALTER TABLE "question" DROP CONSTRAINT "question_quizId_quiz_id_fk";
--> statement-breakpoint
ALTER TABLE "question" DROP CONSTRAINT "question_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "quiz" DROP CONSTRAINT "quiz_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "quiz" DROP CONSTRAINT "quiz_sectionId_section_id_fk";
--> statement-breakpoint
ALTER TABLE "requireCours" DROP CONSTRAINT "requireCours_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "requireCours" DROP CONSTRAINT "requireCours_rCourseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "roadCertification" DROP CONSTRAINT "roadCertification_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "roadCertification" DROP CONSTRAINT "roadCertification_studentId_student_userId_fk";
--> statement-breakpoint
ALTER TABLE "roadMap" DROP CONSTRAINT "roadMap_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "section" DROP CONSTRAINT "section_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "section" DROP CONSTRAINT "section_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "student" DROP CONSTRAINT "student_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "teacher" DROP CONSTRAINT "teacher_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "teacherQualification" DROP CONSTRAINT "teacherQualification_teacherId_teacher_userId_fk";
--> statement-breakpoint
ALTER TABLE "viewRoadMap" DROP CONSTRAINT "viewRoadMap_rmId_roadMap_id_fk";
--> statement-breakpoint
ALTER TABLE "viewRoadMap" DROP CONSTRAINT "viewRoadMap_studentId_student_userId_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answerRecord" ADD CONSTRAINT "answerRecord_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "public"."question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course" ADD CONSTRAINT "course_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "courseTopic" ADD CONSTRAINT "courseTopic_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dO" ADD CONSTRAINT "dO_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dO" ADD CONSTRAINT "dO_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "includeCourse" ADD CONSTRAINT "includeCourse_rmId_roadMap_id_fk" FOREIGN KEY ("rmId") REFERENCES "public"."roadMap"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "includeCourse" ADD CONSTRAINT "includeCourse_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "interact" ADD CONSTRAINT "interact_lectureId_lecture_id_fk" FOREIGN KEY ("lectureId") REFERENCES "public"."lecture"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "interact" ADD CONSTRAINT "interact_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join" ADD CONSTRAINT "join_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join" ADD CONSTRAINT "join_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lecture" ADD CONSTRAINT "lecture_sectionId_section_id_fk" FOREIGN KEY ("sectionId") REFERENCES "public"."section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "option" ADD CONSTRAINT "option_questionId_question_id_fk" FOREIGN KEY ("questionId") REFERENCES "public"."question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_quizId_quiz_id_fk" FOREIGN KEY ("quizId") REFERENCES "public"."quiz"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quiz" ADD CONSTRAINT "quiz_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quiz" ADD CONSTRAINT "quiz_sectionId_section_id_fk" FOREIGN KEY ("sectionId") REFERENCES "public"."section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "requireCours" ADD CONSTRAINT "requireCours_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "requireCours" ADD CONSTRAINT "requireCours_rCourseId_course_id_fk" FOREIGN KEY ("rCourseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadCertification" ADD CONSTRAINT "roadCertification_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadCertification" ADD CONSTRAINT "roadCertification_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roadMap" ADD CONSTRAINT "roadMap_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "section" ADD CONSTRAINT "section_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "section" ADD CONSTRAINT "section_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "student" ADD CONSTRAINT "student_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teacher" ADD CONSTRAINT "teacher_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teacherQualification" ADD CONSTRAINT "teacherQualification_teacherId_teacher_userId_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "viewRoadMap" ADD CONSTRAINT "viewRoadMap_rmId_roadMap_id_fk" FOREIGN KEY ("rmId") REFERENCES "public"."roadMap"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "viewRoadMap" ADD CONSTRAINT "viewRoadMap_studentId_student_userId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
