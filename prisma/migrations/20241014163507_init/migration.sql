/*
  Warnings:

  - You are about to drop the column `announcementId` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Teacher` table. All the data in the column will be lost.
  - Made the column `phone` on table `Parent` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_announcementId_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropIndex
DROP INDEX "Lesson_name_key";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "announcementId",
ADD COLUMN     "classId" INTEGER;

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Parent" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "image",
ADD COLUMN     "img" TEXT;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "image",
ADD COLUMN     "img" TEXT;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
