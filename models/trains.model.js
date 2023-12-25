import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Trains = sequelize.define('trains', {
  train_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  train_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  starting_place: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  starting_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  departure_place: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  departure_day: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  departure_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  indexes: [
    {
      name: 'train_starting_place_index',
      fields: ['starting_place'],
    },
    {
      name: 'train_departure_place_index',
      fields: ['departure_place'],
    },
  ],
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default Trains;
