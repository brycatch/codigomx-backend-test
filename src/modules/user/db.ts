import { Sequelize } from "sequelize";

class DB {
  private static _instance: DB;
  public sequelize: Sequelize;

  private constructor() {
    this.sequelize = new Sequelize({
      host: process.env.DB_HOST || "",
      database: process.env.DB_DATABASE || "",
      username: process.env.DB_USERNAME || "",
      password: process.env.DB_PASSWORD || "",
      dialect: "mysql",
    });
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }
}

const testConnection = async (): Promise<boolean> => {
  try {
    await DB.instance.sequelize.authenticate();
    console.log("Connection authenticated succesfully");
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { DB, testConnection };
