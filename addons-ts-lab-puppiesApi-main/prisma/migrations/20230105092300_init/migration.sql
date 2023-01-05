-- CreateTable
CREATE TABLE "Puppy" (
    "id" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Puppy_pkey" PRIMARY KEY ("id")
);
