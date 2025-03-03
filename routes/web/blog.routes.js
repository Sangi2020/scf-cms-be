import express from "express";
import { createBlog, getAllBlogs, updateBlog, deleteBlog, getBlogById } from "../../controllers/blog.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();


router.get("/get-all-blogs", getAllBlogs);
router.get("/get-blog/:id", getBlogById);

export default router;