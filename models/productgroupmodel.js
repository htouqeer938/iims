import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const productgrouptbl = db.define(
  "productgroup",
  {
    groupid: {
      type: DataTypes.STRING,
    },
    groupname: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default productgrouptbl;
