/*
  Warnings:

  - Added the required column `image_url_2` to the `shoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url_3` to the `shoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url_4` to the `shoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url_5` to the `shoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shoes" ADD COLUMN     "image_url_2" TEXT NOT NULL,
ADD COLUMN     "image_url_3" TEXT NOT NULL,
ADD COLUMN     "image_url_4" TEXT NOT NULL,
ADD COLUMN     "image_url_5" TEXT NOT NULL;
