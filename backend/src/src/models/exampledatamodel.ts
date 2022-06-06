import { DataTypes } from "sequelize";
import database from "../dbConnection";


const ExampleDataModel = database.define( "ExampleDataModel",
  {
    parameter: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

ExampleDataModel.sync();

export default ExampleDataModel;
