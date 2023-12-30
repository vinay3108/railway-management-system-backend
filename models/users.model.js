import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type:DataTypes.STRING(50),
    allowNull:false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
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
