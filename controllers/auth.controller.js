
import * as argon2 from "argon2";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Ensure all fields are provided
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    // Ensure passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email has the correct domain
    const allowedDomain = '@scfstrategies.com';
    if (!email.endsWith(allowedDomain)) {
        return res.status(400).json({
            message: `Invalid email domain. Please use an email with valid domain`,
        });
    }

    try {
        // Check if user already exists
        const userExists = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (userExists) {
            return res.status(400).json({ message: "There is already a account with this email" });
        }

        // Hash the password with Argon2
        const hashedPassword = await argon2.hash(password);

        // Create a new user in the database
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Respond with success message
        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({
            message: 'Something went wrong while registering the user',
        });
    }
}