import express from "express";
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create-blog", createBlog);
router.get("/get-all-blogs", getAllBlogs);
router.put("/update-blog/:id", updateBlog);
router.delete("/delete-blog/:id", deleteBlog);

export default router;