import { Sequelize } from "sequelize";

const sequelize = new Sequelize("railway_management", "user", "password", {
    host: "127.0.0.1",
    port:8081,
    dialect: "mysql",
    logging: false
});

export default sequelize;