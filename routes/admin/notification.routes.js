import express from 'express';
import { getNotifications } from '../../controllers/notification.controller.js';


const router = express.Router();

router.get('/get-all-notifications', getNotifications);

export default router;