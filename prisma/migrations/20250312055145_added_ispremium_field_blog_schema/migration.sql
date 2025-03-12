/*
  Warnings:

  - You are about to alter the column `content` on the `Blog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `NVarChar(Max)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Blog] ALTER COLUMN [content] NVARCHAR(max) NOT NULL;
ALTER TABLE [dbo].[Blog] ADD [isPremium] BIT NOT NULL CONSTRAINT [Blog_isPremium_df] DEFAULT 0;

-- CreateTable
CREATE TABLE [dbo].[DimClient] (
    [ClientID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100),
    [Email] NVARCHAR(100),
    [Phone] NVARCHAR(50),
    [Address] NVARCHAR(255),
    [Industry] NVARCHAR(100),
    [CreatedAt] DATETIME CONSTRAINT [DF__DimClient__Creat__4959E263] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__DimClient__Updat__4A4E069C] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__DimClien__E67E1A048ED458B6] PRIMARY KEY CLUSTERED ([ClientID])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B61AFE72401] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
