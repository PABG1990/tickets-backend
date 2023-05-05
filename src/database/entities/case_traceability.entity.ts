import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'case_traceability';
const MODEL_NAME = 'caseTraceabilityEntity';
const UNIQUE_ID = 'case_traceability_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    case_id: {
        field: 'case_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    observations: {
        field: 'observations',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null
    },
    created_by: {
        field: 'created_by',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
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

export function initializeCaseTraceabilityEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}