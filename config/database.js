import { Sequelize } from "sequelize";
 
const db = new Sequelize('DB_NAME', 'SERVER_USER', 'SERVER_PASSEORD', {
    host: "SERVER",
    port: "SERVER_PORT",
    dialect: "SERVER_TYPE"
});
 
export default db;
