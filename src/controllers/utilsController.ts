import { Request, Response } from 'express';
import utilsService from '../services/utilsService';

class UtilsController {
    public async getProfiles(rq: Request, rs: Response) {
        try {
            const response = await utilsService.getProfiles();
            return rs.status(200).json({
                message: 'Listado de perfiles',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getDocumentTypes(rq: Request, rs: Response) {
        try {
            const response = await utilsService.getDocumentTypes();
            return rs.status(200).json({
                message: 'Listado de tipos de identificacion',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getSupportTypes(rq: Request, rs: Response) {
        try {
            const response = await utilsService.getSupportTypes();
            return rs.status(200).json({
                message: 'Listado de tipos de soporte',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }
}

const utilsController = new UtilsController();
export default utilsController;