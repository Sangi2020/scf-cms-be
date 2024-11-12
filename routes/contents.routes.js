import express from "express";
import { createTestimonial, getAllTestimonials, updateTestimonial, deleteTestimonial } from "../controllers/contents.controller.js";
import verifyJwtToken from "../middlewares/verifyJwtToken.js";

const router = express.Router();

// Testimonial routes
router.post("/testimonial", verifyJwtToken, createTestimonial);
router.get("/testimonials", getAllTestimonials);
router.put("/testimonial/:id", verifyJwtToken, updateTestimonial);
router.delete("/testimonial/:id", verifyJwtToken, deleteTestimonial);

export default router; 