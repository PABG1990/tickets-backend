import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'people';
const MODEL_NAME = 'peopleEntity';
const UNIQUE_ID = 'people_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    customer_id: {
        field: 'customer_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    document_type_id: {
        field: 'document_type_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    document: {
        field: 'document',
        type: DataTypes.DOUBLE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    first_name: {
        field: 'first_name',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    second_name: {
        field: 'second_name',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null,
    },
    first_lastname: {
        field: 'first_lastname',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    second_lastname: {
        field: 'second_lastname',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null,
    },
    phone: {
        field: 'phone',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    created_at: {
        field: 'created_at',
        type: DataTypes.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
        defaultValue: Sequelize.fn('now')
    },
    register_status: {
        field: 'register_status',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
        defaultValue: 'ACTIVO'
    }
}

const options = mapperUtils.getStructureTableOptions(TABLE_NAME, UNIQUE_ID)

export function initializePeopleEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}