import DbConfig from '../database/dbConfig';
import IPeople from '../models/people';
import IUser from '../models/user';

class AuthenticationService {

    public async login(username: string, password: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const conn = DbConfig.getInstance();
                await conn.testConnection();
                const result = await conn.usersEntity.findOne({
                    where: {
                        username,
                        password
                    },
                    attributes: [
                        'id',
                        'person_id',
                        'profile_id',
                        'username',
                        'created_at',
                        'register_status'
                    ],
                    include: [
                        {
                            model: conn.profilesEntity,
                            as: 'profile'
                        },
                        {
                            model: conn.peopleEntity,
                            as: 'person',
                            include: [
                                {
                                    model: conn.documentTypesEntity,
                                    as: 'document_type'
                                },
                                {
                                    model: conn.customerEntity,
                                    as: 'customer'
                                }
                            ]
                        }
                    ]
                });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async createUser(data: {person: IPeople, user: IUser}) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            const transaction = await conn.getTransaction();
            try {
                const savePerson = await conn.peopleEntity.create(data.person, {transaction});
                const saveUser = await conn.usersEntity.create({
                    ...data.user,
                    person_id: savePerson.id
                },
                { transaction });
                await transaction.commit();
                resolve({savePerson, saveUser});
            } catch (error) {
                await transaction.rollback();
                reject(error);
            }
        });
    }

    public async getUsers(where?:any) {
        return new Promise(async (resolve, reject) => {
            try {
                const conn = DbConfig.getInstance();
                await conn.testConnection();
                const result = await conn.usersEntity.findAll({
                    where: {
                        ...where
                    },
                    attributes: [
                        'id',
                        'username'
                    ],
                    include: [
                        {
                            model: conn.profilesEntity,
                            as: 'profile'
                        },
                        {
                            model: conn.peopleEntity,
                            as: 'person',
                            include: [
                                {
                                    model: conn.documentTypesEntity,
                                    as: 'document_type'
                                },
                                {
                                    model: conn.customerEntity,
                                    as: 'customer'
                                }
                            ]
                        }
                    ]
                });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}

const autenticationService = new AuthenticationService();
export default autenticationService;