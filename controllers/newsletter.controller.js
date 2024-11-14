import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import { sendNewsletterEmail } from "../helpers/email.js";



const prisma = new PrismaClient();
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


export const sendBulkNewsletter = async (req, res) => {
    const { subject, content } = req.body;
    const BATCH_SIZE = 100;  
    const DELAY_BETWEEN_EMAILS = 1000; 

    try {
        const subscribers = await prisma.newsletter.findMany();
        
        if (!subscribers || subscribers.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No subscribers found"
            });
        }

        const results = {
            successful: [],
            failed: [],
            totalProcessed: 0
        };

        // Process subscribers in batches
        for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
            const batch = subscribers.slice(i, i + BATCH_SIZE);
            
            // Send to each subscriber in the batch
            for (const subscriber of batch) {
                try {
                    await sendNewsletterEmail({
                        to: subscriber.email,
                        subject,
                        content
                    });
                    
                    results.successful.push(subscriber.email);
                    console.log(`✅ Newsletter sent successfully to ${subscriber.email}`);
                    
                } catch (error) {
                    results.failed.push({
                        email: subscriber.email,
                        error: error.message
                    });
                    console.error(`❌ Failed to send newsletter to ${subscriber.email}:`, error.message);
                }

                results.totalProcessed++;
                
                // Delay between emails to avoid rate limits
                await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_EMAILS));
            }

            // If not the last batch, add a longer delay between batches
            if (i + BATCH_SIZE < subscribers.length) {
                await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 2)); // 2 minutes between batches
            }
        }

        return res.status(200).json({
            success: true,
            message: "Newsletter sending process completed",
            details: {
                totalSubscribers: subscribers.length,
                successfulSends: results.successful.length,
                failedSends: results.failed.length,
                successful: results.successful,
                failed: results.failed
            }
        });

    } catch (error) {
        console.error("Error in newsletter sending process:", error);
        return res.status(500).json({
            success: false,
            message: "Error sending newsletter",
            error: error.message
        });
    }
};