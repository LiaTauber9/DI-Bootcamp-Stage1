import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
    process.env.DB_Name,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
     host:process.env.DB__HOST, // localhost or online server
    dialect:'postgres'
    }
)
export default db