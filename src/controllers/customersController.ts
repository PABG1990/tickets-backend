import { Request, Response } from "express";
import customerService from "../services/customerService";
import ICustomer from "../models/customer";

class CustomersController {
    public async create(rq: Request, rs: Response) {
        try {
            const customer: ICustomer = rq.body;
            const response = await customerService.create(customer);
            return rs.status(200).json({
                message: 'Se ha registrado el cliente correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async update(rq: Request, rs: Response) {
        try {
            const customer: ICustomer = rq.body;
            const response = await customerService.update(customer);
            return rs.status(200).json({
                message: 'Se ha actualizado el cliente correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getCustomers(rq: Request, rs: Response) {
        try {
            const where = rq.body.where || {};
            const response = await customerService.getCustomers(where);
            return rs.status(200).json({
                message: 'Listado de clientes',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }
}

const customersController = new CustomersController();
export default customersController;