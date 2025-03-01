import express from "express"
import {  getDesclaimer, getPrivacyPolicy, getTermsAndConditions } from "../../controllers/document.controller.js"


const router =express.Router()



router.get("/get-privacy", getPrivacyPolicy);
router.get("/get-terms", getTermsAndConditions);
router.get("/get-desclaimer", getDesclaimer);

export default router