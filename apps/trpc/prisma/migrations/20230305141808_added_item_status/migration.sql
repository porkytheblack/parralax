/*
  Warnings:

  - Added the required column `size` to the `MessageAsset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ITemStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "ChannelMember" ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "MessageAsset" ADD COLUMN     "size" "MessageAssetSize" NOT NULL,
ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "ITemStatus" NOT NULL DEFAULT 'ACTIVE';
