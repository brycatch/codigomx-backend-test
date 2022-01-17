import Server from "./server";
import { testConnection as userTestConnection } from "./modules/user/db";

Server.instance.init(async () => {
  console.log(`Server is running at port: ${Server.instance.port}`);
  await userTestConnection();
});
