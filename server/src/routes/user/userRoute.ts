import { Router } from "express";
import { createUser, userLogin } from "../../controller/authController";

const route: Router = Router();

route.post("/", createUser);
route.post("/login", userLogin);

export default route;
