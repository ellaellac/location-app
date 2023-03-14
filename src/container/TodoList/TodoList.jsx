import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "../../components/Task/Task";
import Button from "../../components/Button/Button";
import addImg from "../../assets/add.svg";
import "./TodoList.scss";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  console.log(todo);

  const addNewTask = () => {
    if (newTask) {
      setTodo((oldTask) => [...oldTask, { id: uuidv4(), task: newTask }]);
    }
  };

  return (
    <>
      <label className="list__label" htmlFor="todo-list">
        Upcoming Task Today
      </label>
      <div className="list__input--container">
        <input
          className="list__input--input"
          type="text"
          id="todo"
          name="todo"
          placeholder="add new tasks..."
          onInput={(event) => setNewTask(event.target.value)}
        />
        <Button
          className="list__btn--add"
          onClick={addNewTask}
          BtnImg={addImg}
        />
      </div>
      {todo &&
        todo.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              setTodo={setTodo}
              todo={todo}
            />
          );
        })}
    </>
  );
};
export default TodoList;
