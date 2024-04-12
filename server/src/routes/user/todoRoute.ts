import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  updateCompleted,
} from "../../controller/todoController";
import { protect } from "../../middlewares/authMiddleware";

const route: Router = Router();

route.post("/", protect, createTodo);
route
  .route("/:id")
  .put(protect, editTodo)
  .patch(protect, updateCompleted)
  .delete(protect, deleteTodo);
  
export default route;
