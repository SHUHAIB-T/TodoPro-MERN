import { Router } from "express";
import { createUser, userLogin } from "../../controller/authController";
import todoRoute from "./todoRoute";

const route: Router = Router();

route.post("/", createUser);
route.post("/login", userLogin);

route.use("/todo", todoRoute);

export default route;
