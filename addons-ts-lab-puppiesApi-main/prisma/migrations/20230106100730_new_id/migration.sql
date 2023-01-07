/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Puppy` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Puppy_id_belongsToId_key" ON "Puppy"("id", "belongsToId");
