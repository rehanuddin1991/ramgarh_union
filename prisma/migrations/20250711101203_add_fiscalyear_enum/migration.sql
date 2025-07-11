/*
  Warnings:

  - You are about to alter the column `fiscalYear` on the `holdingcollection` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `holdingcollection` MODIFY `fiscalYear` ENUM('Y2022_2023', 'Y2023_2024', 'Y2024_2025', 'Y2025_2026', 'Y2026_2027', 'Y2027_2028', 'Y2028_2029', 'Y2029_2030', 'Y2031_2032', 'Y2032_2033', 'Y2033_2034', 'Y2034_2035') NOT NULL DEFAULT 'Y2025_2026';
