import express from 'express';
import utilsController from '../controllers/utilsController';
const router = express.Router();

router.get('/get-profiles', utilsController.getProfiles);
router.get('/get-document-types', utilsController.getDocumentTypes);
router.get('/get-support-types', utilsController.getSupportTypes);

export = router;