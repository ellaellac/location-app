import Button from "../Button/Button";
import deleteImg from "../../assets/delete.svg";

const Task = ({ id, task, setTodo, todo }) => {
  const deleteTask = () => {
    const updatedTodoList = todo.filter((task) => task.id !== id);
    setTodo(updatedTodoList);
  };
  return (
    <>
      <p>{task}</p>
      <Button onClick={deleteTask} BtnImg={deleteImg} />
    </>
  );
};
export default Task;
