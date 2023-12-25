import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Classes = sequelize.define('classes', {
  cname: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
}, {
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default Classes;