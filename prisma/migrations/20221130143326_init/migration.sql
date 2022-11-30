-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `marks` INTEGER NOT NULL,
    `co` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
