import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'customer';
const MODEL_NAME = 'customerEntity';
const UNIQUE_ID = 'customer_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    nit: {
        field: 'nit',
        type: DataTypes.DOUBLE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    verification_code: {
        field: 'verification_code',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    address: {
        field: 'address',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
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

export function initializeCustomerEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}