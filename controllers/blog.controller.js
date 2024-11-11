import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const createBlog = async (req, res) => {
    const { title, author, date, image, excerpt, content } = req.body;

    // Validate required fields
    if (!title || !author || !date || !image || !excerpt || !content) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }

    try {
        // Create new blog post
        const blog = await prisma.blog.create({
            data: {
                id: uuidv4(),
                title,
                author,
                date: new Date(date),
                image,
                excerpt,
                content
            }
        });

        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: blog
        });

    } catch (error) {
        console.error("Error creating blog:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating the blog"
        });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                date: 'desc'  // Most recent blogs first
            }
        });

        return res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            data: blogs
        });

    } catch (error) {
        console.error("Error fetching blogs:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching blogs"
        });
    }
};

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, author, date, image, excerpt, content } = req.body;

    // Validate required fields
    if (!title || !author || !date || !image || !excerpt || !content) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }

    try {
        // Check if blog exists
        const existingBlog = await prisma.blog.findUnique({
            where: { id }
        });

        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        // Update blog
        const updatedBlog = await prisma.blog.update({
            where: { id },
            data: {
                title,
                author,
                date: new Date(date),
                image,
                excerpt,
                content,
                updatedAt: new Date()
            }
        });

        return res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: updatedBlog
        });

    } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating the blog"
        });
    }
};

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        // Check if blog exists
        const existingBlog = await prisma.blog.findUnique({
            where: { id }
        });

        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        // Delete blog
        await prisma.blog.delete({
            where: { id }
        });

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting blog:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting the blog"
        });
    }
};

