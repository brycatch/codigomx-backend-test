import { Router } from "express";

const routes = Router();

routes.get("/user/", (req, res) => {
  res.send("test").status(200);
});

export default routes;
