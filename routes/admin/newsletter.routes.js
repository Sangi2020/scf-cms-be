import express from "express";

import { getNewsletterSubscribers, sendBulkNewsletter } from "../../controllers/newsletter.controller.js";

const router = express.Router();



router.post("/send-newsletter",sendBulkNewsletter  );
router.get("/get-all-subscribers",getNewsletterSubscribers)


export default router; 