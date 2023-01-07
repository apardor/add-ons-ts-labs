/*
  Warnings:

  - The primary key for the `Puppy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Update` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UpdatePoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Puppy" DROP CONSTRAINT "Puppy_belongsToId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_productId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_userId_fkey";

-- DropForeignKey
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_updateId_fkey";

-- AlterTable
ALTER TABLE "Puppy" DROP CONSTRAINT "Puppy_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "belongsToId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Puppy_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Puppy_id_seq";

-- AlterTable
ALTER TABLE "Update" DROP CONSTRAINT "Update_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Update_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Update_id_seq";

-- AlterTable
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "updateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UpdatePoint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UpdatePoint_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Puppy" ADD CONSTRAINT "Puppy_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Puppy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdatePoint" ADD CONSTRAINT "UpdatePoint_updateId_fkey" FOREIGN KEY ("updateId") REFERENCES "Update"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
