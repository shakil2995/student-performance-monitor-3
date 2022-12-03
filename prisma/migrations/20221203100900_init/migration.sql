/*
  Warnings:

  - The primary key for the `obestudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `obestudent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- AlterTable
ALTER TABLE `obestudent` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
