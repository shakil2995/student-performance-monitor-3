/*
  Warnings:

  - The primary key for the `obestudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `obestudent` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- AlterTable
ALTER TABLE `obestudent` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`student_id`);

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
