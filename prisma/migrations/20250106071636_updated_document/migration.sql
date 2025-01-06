/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Documents` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Documents] ADD CONSTRAINT [Documents_type_key] UNIQUE NONCLUSTERED ([type]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
