/*
  Warnings:

  - The values [ADNMIN] on the enum `ChannelRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChannelRole_new" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');
ALTER TABLE "ChannelMember" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "ChannelMember" ALTER COLUMN "role" TYPE "ChannelRole_new" USING ("role"::text::"ChannelRole_new");
ALTER TYPE "ChannelRole" RENAME TO "ChannelRole_old";
ALTER TYPE "ChannelRole_new" RENAME TO "ChannelRole";
DROP TYPE "ChannelRole_old";
ALTER TABLE "ChannelMember" ALTER COLUMN "role" SET DEFAULT 'MEMBER';
COMMIT;
