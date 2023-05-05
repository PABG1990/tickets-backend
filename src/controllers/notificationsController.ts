import { Request, Response } from "express";
import INotification from "../models/notification";
import notificationService from "../services/notificationsService";

class NotificationsController {
    public async create(rq: Request, rs: Response) {
        try {
            const notification: INotification = rq.body;
            const response = await notificationService.create(notification);
            return rs.status(200).json({
                message: 'Se ha registrado la notificación correctamente',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }

    public async getNotifications(rq: Request, rs: Response) {
        try {
            const where = rq.body.where || {};
            const response = await notificationService.getNotifications(where);
            return rs.status(200).json({
                message: 'Listado de notificaciones',
                response,
            }).end();
        } catch (error) {
            return rs.status(409).json(error).end();
        }
    }
}

const notificationsController = new NotificationsController();
export default notificationsController;