import express from 'express';
import notificationsController from '../controllers/notificationsController';
const router = express.Router();

router.post('/create', notificationsController.create);
router.post('/get', notificationsController.getNotifications);

export = router;