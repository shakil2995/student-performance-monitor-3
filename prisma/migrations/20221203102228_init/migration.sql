/*
  Warnings:

  - You are about to drop the column `studet_name` on the `obestudent` table. All the data in the column will be lost.
  - Added the required column `student_name` to the `obestudent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- AlterTable
ALTER TABLE `obestudent` DROP COLUMN `studet_name`,
    ADD COLUMN `student_name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
