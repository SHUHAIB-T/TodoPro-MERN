import { Schema, model } from "mongoose";

export interface Itodo {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  isCompleted: boolean;
}

const todoSchema = new Schema<Itodo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: String, required: true, enum: ["low", "medium", "high"] },
    isCompleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Todo = model<Itodo>("Todo", todoSchema);
export default Todo;
