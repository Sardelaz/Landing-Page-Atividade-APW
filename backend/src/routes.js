import express from "express";

import UserController from "./controllers/UserController.js";
import SessionController from "./controllers/SessionController.js";

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)

routes.post('/users', UserController.create);

export default routes;
