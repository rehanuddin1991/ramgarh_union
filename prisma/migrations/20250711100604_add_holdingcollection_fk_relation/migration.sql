-- CreateTable
CREATE TABLE `HoldingCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `holdingInformationId` INTEGER NOT NULL,
    `holdingNumber` VARCHAR(191) NOT NULL,
    `fiscalYear` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `HoldingCollection_holdingInformationId_idx`(`holdingInformationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HoldingCollection` ADD CONSTRAINT `HoldingCollection_holdingInformationId_fkey` FOREIGN KEY (`holdingInformationId`) REFERENCES `Holding_Information`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
