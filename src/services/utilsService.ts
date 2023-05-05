import DbConfig from '../database/dbConfig';

class UtilsService {
    public async getProfiles() {
        return new Promise(async (resolve, reject) => {
            try {
                const conn = DbConfig.getInstance();
                await conn.testConnection();
                const result = await conn.profilesEntity.findAll();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getDocumentTypes() {
        return new Promise(async (resolve, reject) => {
            try {
                const conn = DbConfig.getInstance();
                await conn.testConnection();
                const result = await conn.documentTypesEntity.findAll();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getSupportTypes() {
        return new Promise(async (resolve, reject) => {
            try {
                const conn = DbConfig.getInstance();
                await conn.testConnection();
                const result = await conn.supportTypesEntity.findAll();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const utilsService = new UtilsService();
export default utilsService;