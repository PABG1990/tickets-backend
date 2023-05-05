import express from 'express';
import authController from '../controllers/authenticationController';
const router = express.Router();

router.post('/login', authController.login);
router.post('/create-user', authController.create);
router.post('/get-users', authController.getUsers);

export = router;