import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'cases';
const MODEL_NAME = 'caseEntity';
const UNIQUE_ID = 'case_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    technician_id: {
        field: 'technician_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null
    },
    description: {
        field: 'description',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null
    },
    case_status: {
        field: 'case_status',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
        defaultValue: 'ABIERTO'
    },
    scheduled_date: {
        field: 'scheduled_date',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null
    },
    time_in: {
        field: 'time_in',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null
    },
    time_out: {
        field: 'time_out',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
        comment: null
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

export function initializeCaseEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}