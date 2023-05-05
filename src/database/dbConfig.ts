import { Sequelize } from "sequelize";
import { initializeProfileEntity } from "./entities/profile.entity";
import { initializeCaseTraceabilityDocsEntity } from "./entities/case_traceability_doc.entity";
import { initializeCaseTraceabilityEntity } from "./entities/case_traceability.entity";
import { initializeCaseEntity } from "./entities/case.entity";
import { initializeCustomerEntity } from "./entities/customer.entity";
import { initializeDocumentTypesEntity } from "./entities/document_type.entity";
import { initializeNotificationsEntity } from "./entities/notification.entity";
import { initializePeopleEntity } from "./entities/people.entity";
import { initializeUsersEntity } from "./entities/user.entity";
import { initializeSupportTypesEntity } from "./entities/support_type.entity";

export default class DbConfig {

    private static instance: DbConfig;
    private connection: Sequelize;

    // Database entities
    public caseTraceabilityDocsEntity: any;
    public caseTraceabilityEntity: any;
    public caseEntity: any;
    public customerEntity: any;
    public documentTypesEntity: any;
    public notificationsEntity: any;
    public peopleEntity: any;
    public profilesEntity: any;
    public supportTypesEntity: any;
    public usersEntity: any;

    constructor() {
        this.connection = new Sequelize({
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: 3310,
            dialect: 'mysql'
        });
    }

    public static getInstance(): DbConfig {
        if (!DbConfig.instance) {
            DbConfig.instance = new DbConfig();
        }
        return DbConfig.instance;
    }

    public async testConnection() {
        try {
            await this.connection.authenticate();
            console.log('Connection successfully!');
            this.initializeEntities();
        } catch (error) {
            console.log('Unable to connect to the database! ', error);
        }
    }

    public async closeConnection() {
        await this.connection.close();
    }

    public async getTransaction() {
        return await this.connection.transaction();
    }

    public async rawQuery(query: string) {
        return await this.connection.query(query);
    }

    public async initializeEntities() {
        this.supportTypesEntity         = initializeSupportTypesEntity(this.connection);
        this.caseTraceabilityDocsEntity = initializeCaseTraceabilityDocsEntity(this.connection);
        this.caseTraceabilityEntity     = initializeCaseTraceabilityEntity(this.connection);
        this.caseEntity                 = initializeCaseEntity(this.connection);
        this.customerEntity             = initializeCustomerEntity(this.connection);
        this.documentTypesEntity        = initializeDocumentTypesEntity(this.connection);
        this.notificationsEntity        = initializeNotificationsEntity(this.connection);
        this.peopleEntity               = initializePeopleEntity(this.connection);
        this.profilesEntity             = initializeProfileEntity(this.connection);
        this.usersEntity                = initializeUsersEntity(this.connection);

        this.peopleEntity.belongsTo(this.customerEntity, {
            foreignKey: 'customer_id',
            targetKey: 'id',
            as: 'customer'
        });
        this.peopleEntity.belongsTo(this.documentTypesEntity, {
            foreignKey: 'document_type_id',
            targetKey: 'id',
            as: 'document_type'
        });

        this.usersEntity.belongsTo(this.peopleEntity, {
            foreignKey: 'person_id',
            targetKey: 'id',
            as: 'person'
        });
        this.usersEntity.belongsTo(this.profilesEntity, {
            foreignKey: 'profile_id',
            targetKey: 'id',
            as: 'profile'
        });

        this.caseEntity.belongsTo(this.usersEntity, {
            foreignKey: 'user_id',
            targetKey: 'id',
            as: 'user'
        });
        this.caseEntity.belongsTo(this.usersEntity, {
            foreignKey: 'technician_id',
            targetKey: 'id',
            as: 'technician'
        });
        this.caseEntity.belongsTo(this.supportTypesEntity, {
            foreignKey: 'support_type_id',
            targetKey: 'id',
            as: 'support_type'
        });
        this.caseEntity.hasMany(this.caseTraceabilityEntity, {
            foreignKey: 'case_id',
            as: 'caseTraceability'
        });

        this.caseTraceabilityEntity.belongsTo(this.caseEntity, {
            foreignKey: 'case_id',
            targetKey: 'id',
        });
        this.caseTraceabilityEntity.hasMany(this.caseTraceabilityDocsEntity, {
            foreignKey: 'case_traceability_id',
            as: 'caseTraceabilityDocs'
        });

        this.caseTraceabilityDocsEntity.belongsTo(this.caseEntity, {
            foreignKey: 'case_traceability_id',
            targetKey: 'id'
        });

    }

}
