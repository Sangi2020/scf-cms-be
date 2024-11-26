import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all SEO entries
export const getAllSEO = async (req, res) => {
    try {
        const seoEntries = await prisma.sEO.findMany();
        return res.status(200).json({
            success: true,
            message: "SEO entries fetched successfully",
            data: seoEntries
        });
    } catch (error) {
        console.error("Error fetching SEO entries:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching SEO entries"
        });
    }
};