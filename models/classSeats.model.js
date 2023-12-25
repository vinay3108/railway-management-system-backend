import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const ClassSeats = sequelize.define('class_seats', {
  train_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date_of_journey: {
    type: DataTypes.DATE,
    primaryKey: true,
  },
  class: {
    type: DataTypes.STRING(50),
    primaryKey: true,
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
