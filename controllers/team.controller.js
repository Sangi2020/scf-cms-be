import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import { imageUploadToCloudinary } from "../helpers/image.upload.js";

const prisma = new PrismaClient();


export const addTeam = async (req, res) => {
    const { name, position, bio, linkedin, email, order } = req.body;

    // Validate required fields
    if (!name || !position || !bio) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields: name, position, and bio."
        });
    }
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Please provide an image file."
        });
    }

    try {
        const folderPath = 'scf/team';  // Specify your folder path here
        const result = await imageUploadToCloudinary(req.file, folderPath);
        let imageUrl = result.secure_url;


        const orderValue = order ? parseInt(order, 10) : null;
        // Create new team member record in the database
        const newTeamMember = await prisma.team.create({
            data: {
                id: uuidv4(),
                name,
                position,
                bio,
                linkedin: linkedin,
                email: email,
                image: imageUrl,
                order: orderValue,
                isActive: true,
            }
        });

        return res.status(201).json({
            success: true,
            message: "Team member added successfully",
            data: newTeamMember
        });
    } catch (error) {
        console.error("Error adding team member:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while adding the team member."
        });
    }
};

