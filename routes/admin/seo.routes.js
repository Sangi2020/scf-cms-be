import express from 'express';
import { createSEO, deleteSEO, getSEO, updateSEO } from '../../controllers/seo.controller.js';
import verifyJwtToken from '../../middlewares/verifyJwtToken.js';

const router = express.Router();

router.get('/get',verifyJwtToken, getSEO);
router.post('/create',verifyJwtToken, createSEO);
router.put('/update/:id',verifyJwtToken, updateSEO);
router.delete('/delete/:id',verifyJwtToken, deleteSEO);

export default router;