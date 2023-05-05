import { Request, Response } from 'express';
import autenticationService from '../services/authenticationService';
import IPeople from '../models/people';
import IUser from '../models/user';

class AuthenticationController {

    public async login(rq: Request, rs: Response) {
        try {
            const {
                username,
                password
            } = rq.body;
            const response = await autenticationService.login(username, password);
            return rs.status(200).json({
                message: 'Ha iniciado sesión correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async create(rq: Request, rs: Response) {
        try {
            const person: IPeople = rq.body.person;
            const user: IUser = rq.body.user;
            const response = await autenticationService.createUser({person, user});
            return rs.status(200).json({
                message: 'Se ha creado el usuario correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getUsers(rq: Request, rs: Response) {
        try {
            const where = rq.body.where || {};
            const response = await autenticationService.getUsers(where);
            return rs.status(200).json({
                message: 'Listado de usuarios registrado',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

}
const authController = new AuthenticationController();
export default authController;