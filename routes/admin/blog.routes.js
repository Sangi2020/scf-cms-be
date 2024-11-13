import express from "express";
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from "../../controllers/blog.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/create-blog",upload.single("image"),createBlog);
router.get("/get-all-blogs", getAllBlogs);
router.put("/update-blog/:id",upload.single('image'), updateBlog);
router.delete("/delete-blog/:id", deleteBlog);

export default router;