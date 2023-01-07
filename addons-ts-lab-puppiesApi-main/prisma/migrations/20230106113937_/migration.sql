/*
  Warnings:

  - The primary key for the `Puppy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Puppy` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Update` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Update` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `userId` column on the `Update` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UpdatePoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UpdatePoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `belongsToId` on the `Puppy` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `Update` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updateId` on the `UpdatePoint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

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
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "belongsToId",
ADD COLUMN     "belongsToId" INTEGER NOT NULL,
ADD CONSTRAINT "Puppy_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Update" DROP CONSTRAINT "Update_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER,
ADD CONSTRAINT "Update_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "updateId",
ADD COLUMN     "updateId" INTEGER NOT NULL,
ADD CONSTRAINT "UpdatePoint_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Puppy_id_belongsToId_key" ON "Puppy"("id", "belongsToId");

-- AddForeignKey
ALTER TABLE "Puppy" ADD CONSTRAINT "Puppy_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Puppy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdatePoint" ADD CONSTRAINT "UpdatePoint_updateId_fkey" FOREIGN KEY ("updateId") REFERENCES "Update"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
