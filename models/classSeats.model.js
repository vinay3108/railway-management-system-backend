import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const ClassSeats = sequelize.define('class_seats', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  train_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_of_journey: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fare: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seats_left: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['train_no', 'date_of_journey', 'class'],
      name: 'classseats_train_no_date_of_journey_class_index',
    },
    {
      fields: ['class'],
      name: 'classseats_class_index',
    },
  ],
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default ClassSeats;
