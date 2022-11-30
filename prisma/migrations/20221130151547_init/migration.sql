/*
  Warnings:

  - You are about to drop the column `course_id` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `semester` on the `question` table. All the data in the column will be lost.
  - Added the required column `paper_id` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `question` DROP COLUMN `course_id`,
    DROP COLUMN `section`,
    DROP COLUMN `semester`,
    ADD COLUMN `paper_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `QuestionPaper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_paper_id_fkey` FOREIGN KEY (`paper_id`) REFERENCES `QuestionPaper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
