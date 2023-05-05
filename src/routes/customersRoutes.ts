import express from 'express';
import customersController from '../controllers/customersController';
const router = express.Router();

router.post('/create', customersController.create);
router.put('/update', customersController.update);
router.post('/get', customersController.getCustomers);

export = router;