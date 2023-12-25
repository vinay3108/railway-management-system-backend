import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Stations = sequelize.define('stations', {
    station_name: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
  }, {
    // Additional model options can be specified here
    // Example:
    // timestamps: false,
  });

export default Stations;