import express from 'express';
import { deleteAllNotifications, deleteNotification, getNotifications, markAllAsRead, markAsRead, triggerNotification } from '../../controllers/notification.controller.js';


const router = express.Router();

router.get('/get-all-notifications', getNotifications);
router.put('/mark-as-read/:id', markAsRead);
router.put('/mark-all-as-read',markAllAsRead)
router.delete('/delete/:id',deleteNotification)
router.delete('/clear-all-notifications', deleteAllNotifications);




//testing api
router.post('/trigger-notification', triggerNotification);

export default router;