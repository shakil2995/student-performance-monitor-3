/*
  Warnings:

  - A unique constraint covering the columns `[uniqueId]` on the table `question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uniqueId]` on the table `questionpaper` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uniqueId` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniqueId` to the `questionpaper` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `question_paper_id_fkey` ON `question`;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `uniqueId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `questionpaper` ADD COLUMN `uniqueId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `question_uniqueId_key` ON `question`(`uniqueId`);

-- CreateIndex
CREATE UNIQUE INDEX `questionpaper_uniqueId_key` ON `questionpaper`(`uniqueId`);

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
