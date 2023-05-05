import { Request, Response } from 'express';
import ICase from '../models/case';
import casesService from '../services/casesHandlerService';
import ICaseTraceability from '../models/case_traceability';
import ICaseTraceabilityDoc from '../models/case_traceability_doc';

class CasesController {
    
    public async create(rq: Request, rs: Response) {
        try {
            const newCase: ICase = rq.body;
            const response = await casesService.create(newCase);
            return rs.status(200).json({
                message: 'Se ha creado el caso de soporte correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async update(rq: Request, rs: Response) {
        try {
            const newCase: ICase = rq.body;
            const response = await casesService.update(newCase);
            return rs.status(200).json({
                message: 'Se ha actualizado el caso correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async addTraceability(rq: Request, rs: Response) {
        try {
            const traceability: ICaseTraceability = rq.body;
            const response = await casesService.addTraceability(traceability);
            return rs.status(200).json({
                message: 'Se ha registrado la trazabilidad sobre el caso',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async addTraceabilityDoc(rq: Request, rs: Response) {
        try {
            const traceabilityDoc: ICaseTraceabilityDoc = rq.body;
            const response = await casesService.addTraceabilityDoc(traceabilityDoc);
            return rs.status(200).json({
                message: 'Se ha registrado el documento sobre la trazabilidad del caso',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getCases(rq: Request, rs: Response) {
        try {
            const where = rq.body.where || {};
            const response = await casesService.getCases(where);
            return rs.status(200).json({
                message: 'Listado de casos',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getCasesByStatus(rq: Request, rs: Response) {
        try {
            const where = rq.body.where;
            const response = await casesService.getCasesByStatus(where);
            return rs.status(200).json({
                message: 'Listado de casos',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }
}

const casesController = new CasesController();
export default casesController;