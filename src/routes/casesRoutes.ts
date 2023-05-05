import express from 'express';
import casesController from '../controllers/casesController';
const router = express.Router();

router.post('/create', casesController.create);
router.put('/update', casesController.update);
router.post('/get', casesController.getCases);
router.post('/get-by-status', casesController.getCasesByStatus);
router.post('/add-traceability', casesController.addTraceability);
router.post('/add-traceability-doc', casesController.addTraceabilityDoc);

export = router;