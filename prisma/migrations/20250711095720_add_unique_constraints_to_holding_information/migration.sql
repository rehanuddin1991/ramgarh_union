/*
  Warnings:

  - A unique constraint covering the columns `[nid]` on the table `Holding_Information` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ward,holdingNo]` on the table `Holding_Information` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Holding_Information_nid_key` ON `Holding_Information`(`nid`);

-- CreateIndex
CREATE UNIQUE INDEX `Holding_Information_ward_holdingNo_key` ON `Holding_Information`(`ward`, `holdingNo`);
