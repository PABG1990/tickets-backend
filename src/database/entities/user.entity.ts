import { Sequelize, DataTypes } from 'sequelize';
import mapperUtils from '../../utils/mapperUtils';

const TABLE_NAME = 'users';
const MODEL_NAME = 'usersEntity';
const UNIQUE_ID = 'users_id';

const tableAttributes: any = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: null,
    },
    person_id: {
        field: 'person_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    profile_id: {
        field: 'profile_id',
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    username: {
        field: 'username',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        comment: null,
    },
    password: {
        field: 'password',
        type: DataTypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
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

export function initializeUsersEntity(sequelizeConn: Sequelize) {
    return sequelizeConn.define(
      MODEL_NAME,
      tableAttributes,
      options
    );
}