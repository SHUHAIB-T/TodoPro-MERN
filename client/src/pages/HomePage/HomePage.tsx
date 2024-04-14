import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllMytodos } from "../../servieces/todoServiece";
import { IMyTodos } from "../../types/todoTypes";
import TodoCard from "../../components/TodoCard/TodoCard";

export default function HomePage() {
  const [currentTodo, setCurrentTodo] = useState<IMyTodos | undefined>();
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getAllMytodos());
  }, [dispatch]);

  useEffect(() => {
    if (currentTodo) {
      setCurrentTodo(todos?.find((e) => e._id === currentTodo?._id));
    }
  }, [todos, currentTodo]);

  useEffect(() => {
    if (todos) {
      setCurrentTodo(todos[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <div className="pt-16 h-screen grid grid-cols-12">
        <div className="col-span-3">
          <SideBar setCurrentTodo={setCurrentTodo} />
        </div>
        <div className="col-span-9 bg-white text-white dark:bg-gray-950/[0.8]">
          <div className="p-3 flex min-h-full overflow-hidden flex-col gap-3">
            {currentTodo &&
              currentTodo.todos.map((e) => (
                <>
                  <TodoCard
                    description={e.description}
                    dueDate={e.dueDate}
                    priority={e.priority}
                    title={e.title}
                    isCompleted={e.isCompleted}
                    _id={e._id}
                    setCurrentTodo={setCurrentTodo}
                    currentTodo={currentTodo}
                    todos={currentTodo.todos}
                  />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
