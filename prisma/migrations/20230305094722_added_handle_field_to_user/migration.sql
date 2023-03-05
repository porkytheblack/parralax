/*
  Warnings:

  - You are about to drop the column `handler` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[handle]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `handle` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_handler_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "handler",
ADD COLUMN     "handle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_handle_key" ON "User"("handle");
