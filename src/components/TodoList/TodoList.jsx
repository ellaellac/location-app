import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      <label htmlFor="todo-list">Upcoming Task Today</label>;
      <input
        type="text"
        id="todo"
        name="todo"
        placeholder="add new tasks..."
        onInput={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addNewTask}>Add</button>
    </>
  );
};
export default TodoList;
