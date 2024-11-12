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

export const subscribeToNewsletter = async (req, res) => {
    const { email } = req.body;

    // Validate email
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    try {
        // Check if email already exists
        const existingSubscription = await prisma.newsletter.findUnique({
            where: { email }
        });

        if (existingSubscription) {
            return res.status(400).json({
                success: false,
                message: "This email is already subscribed to our newsletter"
            });
        }

        // Create new subscription
        const subscription = await prisma.newsletter.create({
            data: {
                id: uuidv4(),
                email
            }
        });

        return res.status(201).json({
            success: true,
            message: "Successfully subscribed to newsletter",
            data: subscription
        });

    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while subscribing to newsletter"
        });
    }
};

export const unsubscribeFromNewsletter = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    try {
        // Check if subscription exists
        const existingSubscription = await prisma.newsletter.findUnique({
            where: { email }
        });

        if (!existingSubscription) {
            return res.status(404).json({
                success: false,
                message: "Email not found in newsletter subscription list"
            });
        }

        // Delete subscription
        await prisma.newsletter.delete({
            where: { email }
        });

        return res.status(200).json({
            success: true,
            message: "Successfully unsubscribed from newsletter"
        });

    } catch (error) {
        console.error("Error unsubscribing from newsletter:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while unsubscribing from newsletter"
        });
    }
}; 
