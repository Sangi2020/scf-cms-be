import express from "express";
import { createContactEnquiry } from "../../controllers/enquiries.controller.js";
import { subscribeToNewsletter, unsubscribeFromNewsletter } from "../../controllers/enquiries.controller.js";

const router = express.Router();

router.post("/create-enquiry", createContactEnquiry);

// Newsletter Routes
router.post("/subscribe", subscribeToNewsletter);
router.post("/unsubscribe", unsubscribeFromNewsletter);

export default router; 