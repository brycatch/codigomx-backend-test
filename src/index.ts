import Server from "./server";

Server.instance.init(() => {
  console.log(`Server is running at port: ${Server.instance.port}`);
});
