import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Reservations = sequelize.define('reservations', {
  pnr: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  train_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_of_journey: {
    type: DataTypes.DATEONLY, // Assuming you only want the date without time
    allowNull: false,
  },
  train_fare: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  no_of_seat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['id', 'train_no', 'date_of_journey', 'status'],
      name: 'UNIQUE',
    },
    {
      fields: ['train_no', 'date_of_journey', 'class'],
      name: 'FK_TN_DOJ_C',
    },
    {
      fields: ['class'],
      name: 'class',
    },
  ],
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default Reservations;
