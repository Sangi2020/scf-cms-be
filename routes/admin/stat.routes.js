import express from "express";
import { countryAnalytics } from "../../controllers/stat.controller.js";




const router = express.Router();

router.get("/country-analytics", countryAnalytics )



export default router;