import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'support_types';
const MODEL_NAME = 'supportTypesEntity';
const UNIQUE_ID = 'support_types_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
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
}

const options = mapperUtils.getStructureTableOptions(TABLE_NAME, UNIQUE_ID)

export function initializeSupportTypesEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}