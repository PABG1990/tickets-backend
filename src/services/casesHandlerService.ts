import DbConfig from "../database/dbConfig";
import ICase from "../models/case"
import ICaseTraceability from "../models/case_traceability";
import ICaseTraceabilityDoc from "../models/case_traceability_doc";

class CasesHandlerService {

    public async create(newCase: ICase) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const saveCase = await conn.caseEntity.create(newCase);
                resolve(saveCase);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async update(updatedCase: ICase) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const updateCase = await conn.caseEntity.update(updatedCase, {
                    where: {
                        id: updatedCase.id
                    }
                });
                resolve(updateCase[0]);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async addTraceability(traceability: ICaseTraceability) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const saveTraceability = await conn.caseTraceabilityEntity.create(traceability);
                resolve(saveTraceability);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async addTraceabilityDoc(traceabilityDoc: ICaseTraceabilityDoc) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const saveTraceabilityDoc = await conn.caseTraceabilityDocsEntity.create(traceabilityDoc);
                resolve(saveTraceabilityDoc);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getCases(where?: any) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const cases = await conn.caseEntity.findAll({
                    where: {
                        ...where
                    },
                    include: [
                        {
                            model: conn.supportTypesEntity,
                            as: 'support_type'
                        },
                        {
                            model: conn.usersEntity,
                            as: 'user',
                            attributes: [
                                'id',
                                'person_id',
                                'profile_id',
                                'username'
                            ],
                            include: [
                                {
                                    model: conn.peopleEntity,
                                    as: 'person',
                                    attributes: [
                                        'id',
                                        'customer_id',
                                        'first_name',
                                        'second_name',
                                        'first_lastname',
                                        'second_lastname',
                                        'email'
                                    ],
                                }
                            ]
                        },
                        {
                            model: conn.usersEntity,
                            as: 'technician',
                            attributes: [
                                'id',
                                'person_id',
                                'profile_id',
                                'username'
                            ],
                            include: [
                                {
                                    model: conn.peopleEntity,
                                    as: 'person',
                                    attributes: [
                                        'id',
                                        'customer_id',
                                        'first_name',
                                        'second_name',
                                        'first_lastname',
                                        'second_lastname',
                                        'email'
                                    ],
                                }
                            ]
                        },
                        {
                            model: conn.caseTraceabilityEntity,
                            as: 'caseTraceability',
                            include: [
                                {
                                    model: conn.caseTraceabilityDocsEntity,
                                    as: 'caseTraceabilityDocs'
                                }
                            ]
                        }
                    ]
                });
                resolve(cases);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getCasesByStatus(where?: string) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const query = `
                    SELECT
                    COUNT(*) amount,
                    case_status
                    FROM cases
                    WHERE ${where}
                    GROUP BY case_status
                `;
                const cases = (await conn.rawQuery(query))[0];
                resolve(cases);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const casesService = new CasesHandlerService();
export default casesService;