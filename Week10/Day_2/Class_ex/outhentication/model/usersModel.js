import { DataTypes, Sequelize } from "sequelize";
import db from '../config/dbElephantsql.js';

const {DataType} = Sequelize;

const Users = db.define('users',{
    email:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
   }, 
   {
    timestamps:false
   },
   {
    createdAt:{
        field:'createdat'
    }
   });
// table-name and obj of column
// timestamps:false to avoid mandatory column for sequelize: createdAt && updatedAt (id we do have in our table)
// field:'createdat' => becous postgress creats column name with lowerCase

export default Users;