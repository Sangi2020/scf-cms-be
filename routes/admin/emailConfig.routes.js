import express from "express";

import verifyjwtToken from "../../middlewares/verifyJwtToken.js";
import {  getEmailConfiguration, sendTestEmail, upsertEmailConfig } from "../../controllers/emailConfig.controller.js";



const router = express.Router();

router.get('/email-config',getEmailConfiguration)
router.put("/email-config/:id", upsertEmailConfig);
router.post("/test-email", sendTestEmail);






export default router;