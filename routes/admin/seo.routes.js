import express from 'express';
import { getAllSEO } from '../../controllers/seo.controller.js';

const router = express.Router();

router.get('/get-all-seo', getAllSEO); // Get all SEO entries

export default router;