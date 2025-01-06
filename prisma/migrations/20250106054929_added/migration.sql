/*
  Warnings:

  - A unique constraint covering the columns `[pageTitle]` on the table `seo` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[seo] ADD CONSTRAINT [seo_pageTitle_key] UNIQUE NONCLUSTERED ([pageTitle]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
