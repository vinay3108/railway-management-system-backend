import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const CancelTickets = sequelize.define('cancel_tickets', {
  pnr: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  return_fare: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  // Additional model options can be specified here
  // Example:
  // timestamps: false,
});

export default CancelTickets;
