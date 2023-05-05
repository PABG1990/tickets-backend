import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';

import authenticationRoutes from './routes/autenticationRoutes';
import customersRoutes from './routes/customersRoutes';
import casesRoutes from './routes/casesRoutes';
import utilsRoutes from './routes/utilsRoutes';
import notificationsRoutes from './routes/notificationsRoutes';

const router: Express = express();

dotenv.config();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors());


/** Routes */
router.use('/authentication', authenticationRoutes);
router.use('/customers', customersRoutes);
router.use('/cases', casesRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/utils', utilsRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT || 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));