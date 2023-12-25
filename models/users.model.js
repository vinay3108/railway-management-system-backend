import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  mobile_no: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default Users;
