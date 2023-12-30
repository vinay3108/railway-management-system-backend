import { DataTypes } from 'sequelize';
import sequelize from '../initials/dbConnection.js';

const Stations = sequelize.define('stations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  station_name: {
      type: DataTypes.STRING(50),
    },
  }, {
    // Additional model options can be specified here
    // Example:
    timestamps: true,
  });

export default Stations;