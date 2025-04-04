/*
  Warnings:

  - The primary key for the `EmailConfig` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `EmailConfig` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- RedefineTables
BEGIN TRANSACTION;
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'EmailConfig'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_EmailConfig] (
    [id] INT NOT NULL IDENTITY(1,1),
    [host] NVARCHAR(1000) NOT NULL,
    [port] INT NOT NULL,
    [secure] BIT NOT NULL,
    [authUser] NVARCHAR(1000) NOT NULL,
    [authPass] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [EmailConfig_pkey] PRIMARY KEY CLUSTERED ([id])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_EmailConfig] ON;
IF EXISTS(SELECT * FROM [dbo].[EmailConfig])
    EXEC('INSERT INTO [dbo].[_prisma_new_EmailConfig] ([authPass],[authUser],[host],[id],[port],[secure]) SELECT [authPass],[authUser],[host],[id],[port],[secure] FROM [dbo].[EmailConfig] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_EmailConfig] OFF;
DROP TABLE [dbo].[EmailConfig];
EXEC SP_RENAME N'dbo._prisma_new_EmailConfig', N'EmailConfig';
COMMIT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
