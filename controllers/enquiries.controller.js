import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const createContactEnquiry = async (req, res) => {
    const { name, phoneNumber, email, message } = req.body;

    // Validate required fields
    if (!name || !phoneNumber || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }

    try {
        // Create new contact enquiry
        const contact = await prisma.enquiries.create({
            data: {
                id: uuidv4(),
                name,
                phoneNumber,
                email,
                message
            }
        });

        return res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully",
            data: contact
        });

    } catch (error) {
        console.error("Error saving contact enquiry:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while submitting your enquiry"
        });
    }
};

