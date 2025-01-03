BEGIN TRY

BEGIN TRAN;

-- DropIndex
DROP INDEX [seo_title_idx] ON [dbo].[seo];

-- CreateIndex
CREATE NONCLUSTERED INDEX [seo_pageTitle_idx] ON [dbo].[seo]([pageTitle]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
