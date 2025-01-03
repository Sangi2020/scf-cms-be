import express from 'express';
import { createSEO, deleteSEO, getSEO, updateSEO } from '../../controllers/seo.controller.js';

const router = express.Router();

router.get('/get', getSEO);
router.post('/create', createSEO);
router.put('/update/:id', updateSEO);
router.delete('/delete/:id', deleteSEO);

export default router;