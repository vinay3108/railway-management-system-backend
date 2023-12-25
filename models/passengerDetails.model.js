import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const PassengerDetails = sequelize.define('passenger_details', {
  pnr: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  passenger_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  passenger_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  passenger_gender: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['pnr', 'passenger_name', 'passenger_age', 'passenger_gender'],
      name: 'passenger_detail_pnr_p_name_p_age_p_gender_index',
    },
  ],
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default PassengerDetails;
