-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- CreateTable
CREATE TABLE `obestudent` (
    `student_id` VARCHAR(191) NOT NULL,
    `studet_name` VARCHAR(191) NOT NULL,
    `courseID` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `CO1` INTEGER NOT NULL,
    `CO2` INTEGER NOT NULL,
    `CO3` INTEGER NOT NULL,
    `CO4` INTEGER NOT NULL,
    `grade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
