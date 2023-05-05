import DbConfig from "../database/dbConfig";
import INotification from "../models/notification";

class NotificationsService {

    public async create(notification: INotification) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const saveNotification = await conn.notificationsEntity.create(notification);
                resolve(saveNotification);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getNotifications(where?: any) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const result = await conn.notificationsEntity.findAll({
                    where: {
                        ...where
                    }
                });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const notificationService = new NotificationsService();
export default notificationService;