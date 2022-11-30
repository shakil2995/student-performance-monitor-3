/*
  Warnings:

  - You are about to drop the `questionpaper` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Question_paper_id_fkey` ON `question`;

-- DropTable
DROP TABLE `questionpaper`;

-- CreateTable
CREATE TABLE `question_paper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_paper_id_fkey` FOREIGN KEY (`paper_id`) REFERENCES `question_paper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
