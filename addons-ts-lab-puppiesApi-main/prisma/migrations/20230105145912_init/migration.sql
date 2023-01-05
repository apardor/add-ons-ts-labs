/*
  Warnings:

  - You are about to drop the `Puppy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Puppy";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
