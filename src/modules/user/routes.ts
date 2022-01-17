import { Router } from "express";

const BASE_URL = "/user";
const routes = Router();

// routes.get("/user/", (req, res) => {
//   res.send("test").status(200);
// });

// Create
routes.post(`${BASE_URL}/`, (req, res) => {
  res.send("Create").status(200);
});

// Get list
routes.get(`${BASE_URL}/`, (req, res) => {
  res.send("Get list").status(200);
});

// Get id
routes.get(`${BASE_URL}/:id`, (req, res) => {
  res.send("Get").status(200);
});

// Update
routes.put(`${BASE_URL}/:id`, (req, res) => {
  res.send("Update").status(200);
});

// Delete
routes.delete(`${BASE_URL}/:id`, (req, res) => {
  res.send("Delete").status(200);
});

export default routes;
