/*
  Warnings:

  - A unique constraint covering the columns `[publicUrl]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_publicUrl_key" ON "Asset"("publicUrl");
