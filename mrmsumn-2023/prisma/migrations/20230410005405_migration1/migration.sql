-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `awarding` (
    `Name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(64) NOT NULL,
    `PhoneNumber` VARCHAR(16) NOT NULL,
    `TransactionProof` VARCHAR(255) NOT NULL,
    `Origin` VARCHAR(3) NOT NULL,
    `TransactionDate` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`Email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ci_sessions` (
    `id` VARCHAR(40) NOT NULL,
    `ip_address` VARCHAR(45) NOT NULL,
    `timestamp` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `data` BLOB NOT NULL,

    INDEX `ci_sessions_timestamp`(`timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `finalis2020` (
    `Name` VARCHAR(255) NOT NULL,
    `Major` VARCHAR(255) NOT NULL,
    `Year` INTEGER NOT NULL,
    `Tagline` VARCHAR(255) NOT NULL,
    `Photo` VARCHAR(255) NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `finalis2022` (
    `Name` VARCHAR(255) NOT NULL,
    `Major` VARCHAR(255) NOT NULL,
    `Year` INTEGER NOT NULL,
    `Tagline` VARCHAR(255) NOT NULL,
    `Photo` VARCHAR(255) NOT NULL,
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metanoia` (
    `Name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(64) NOT NULL,
    `PhoneNumber` VARCHAR(16) NOT NULL,
    `TransactionProof` VARCHAR(255) NOT NULL,
    `Origin` VARCHAR(3) NOT NULL,
    `TransactionDate` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`Email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peserta` (
    `Name` VARCHAR(255) NOT NULL,
    `StudentID` VARCHAR(11) NOT NULL,
    `Email` VARCHAR(64) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `BirthDate` DATE NOT NULL,
    `BirthPlace` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(16) NOT NULL,
    `LineID` VARCHAR(255) NOT NULL,
    `IGUsername` VARCHAR(255) NOT NULL,
    `Major` VARCHAR(255) NOT NULL,
    `Year` VARCHAR(11) NOT NULL,
    `GPA` VARCHAR(8) NOT NULL,
    `gpaPict` VARCHAR(255) NOT NULL,
    `Height` VARCHAR(11) NOT NULL,
    `Weight` VARCHAR(11) NOT NULL,
    `clothesSize` VARCHAR(11) NOT NULL,
    `pantsSize` VARCHAR(11) NOT NULL,
    `shoeSize` INTEGER NOT NULL,
    `AboutMe` TEXT NOT NULL,
    `Motivation` TEXT NOT NULL,
    `Talents` TEXT NOT NULL,
    `OrganizationExperience` TEXT NOT NULL,
    `Achievements` TEXT NOT NULL,
    `RoleModelCharacter` TEXT NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `personality` VARCHAR(255) NOT NULL,
    `essai` VARCHAR(255) NOT NULL,
    `Status` INTEGER NOT NULL,
    `QuestionType` CHAR(1) NOT NULL,

    PRIMARY KEY (`StudentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peserta_2023` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `birth_date` DATE NOT NULL,
    `birth_place` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(16) NOT NULL,
    `line_id` VARCHAR(255) NOT NULL,
    `instagram_username` VARCHAR(255) NOT NULL,
    `tiktok_username` VARCHAR(255) NOT NULL,
    `major` VARCHAR(255) NOT NULL,
    `year` VARCHAR(11) NOT NULL,
    `gpa` VARCHAR(8) NOT NULL,
    `height` VARCHAR(11) NOT NULL,
    `weight` VARCHAR(11) NOT NULL,
    `clothes_size` VARCHAR(11) NOT NULL,
    `shoe_size` INTEGER NOT NULL,
    `pants_size` VARCHAR(11) NOT NULL,
    `about_me` TEXT NOT NULL,
    `motivation` TEXT NOT NULL,
    `personality` VARCHAR(255) NOT NULL,
    `talents` TEXT NOT NULL,
    `achievements` TEXT NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `personality_screenshot` VARCHAR(255) NOT NULL,
    `grades_screenshot` VARCHAR(255) NOT NULL,
    `student_card_screenshot` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peserta_candidate` (
    `StudentID` VARCHAR(11) NOT NULL,
    `CandidateImage` VARCHAR(255) NOT NULL,

    INDEX `StudentID`(`StudentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peserta_tugas` (
    `StudentID` VARCHAR(11) NOT NULL,
    `tugas1` VARCHAR(255) NOT NULL,
    `timeTugas1` VARCHAR(255) NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voting` (
    `NIM` VARCHAR(11) NOT NULL,
    `Voters` INTEGER NOT NULL,

    PRIMARY KEY (`NIM`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
