CREATE TABLE IF NOT EXISTS "certification" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"date" date DEFAULT now() NOT NULL,
	"issuerID" uuid NOT NULL,
	"recipientID" uuid NOT NULL,
	"courseID" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "course" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"levelrequirement" varchar(255) NOT NULL,
	"description" varchar(255),
	"lecturerID" uuid NOT NULL,
	"paymentID" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"method" varchar(255),
	"date" date DEFAULT now() NOT NULL,
	"studentID" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phonenumber" varchar(255) NOT NULL,
	"degree" varchar(255),
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_issuerID_user_id_fk" FOREIGN KEY ("issuerID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_recipientID_user_id_fk" FOREIGN KEY ("recipientID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "certification" ADD CONSTRAINT "certification_courseID_course_id_fk" FOREIGN KEY ("courseID") REFERENCES "public"."course"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course" ADD CONSTRAINT "course_lecturerID_user_id_fk" FOREIGN KEY ("lecturerID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course" ADD CONSTRAINT "course_paymentID_payment_id_fk" FOREIGN KEY ("paymentID") REFERENCES "public"."payment"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payment" ADD CONSTRAINT "payment_studentID_user_id_fk" FOREIGN KEY ("studentID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
