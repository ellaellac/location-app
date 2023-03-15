import Button from "../Button/Button";
import deleteImg from "../../assets/delete.svg";
import "./Task.scss";

const Task = ({ id, task, setTodo, todo }) => {
  const deleteTask = () => {
    const updatedTodoList = todo.filter((task) => task.id !== id);
    setTodo(updatedTodoList);
  };
  return (
    <div className="task-container">
      <p className="task__text">{task}</p>
      <Button
        onClick={deleteTask}
        BtnImg={deleteImg}
        className="list__btn--delete"
      />
    </div>
  );
};
export default Task;
