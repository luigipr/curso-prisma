CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"content" TEXT NOT NULL
	"createdAt" DATE DEFAULT NOW()
)

ALTER TABLE posts ADD "createdAt" DATE;
ALTER TABLE posts RENAME COLUMN "body" TO "content";