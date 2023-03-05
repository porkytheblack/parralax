-- CreateEnum
CREATE TYPE "ChannelRole" AS ENUM ('OWNER', 'ADNMIN', 'MEMBER');

-- AlterTable
ALTER TABLE "ChannelMember" ADD COLUMN     "role" "ChannelRole" NOT NULL DEFAULT 'MEMBER';
