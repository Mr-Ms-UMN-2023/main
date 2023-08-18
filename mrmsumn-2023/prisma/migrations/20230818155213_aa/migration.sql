-- CreateTable
CREATE TABLE `sponsor_medpar` (
    `Sponsor_MedparID` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `src` VARCHAR(1000) NOT NULL,
    `nama` VARCHAR(255) NULL,
    `url` VARCHAR(2048) NULL,
    `bg` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`Sponsor_MedparID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
