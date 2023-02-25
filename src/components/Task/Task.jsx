import Button from "../Button/Button";

const Task = ({ id, task, setTodo, todo }) => {
  const deleteTask = () => {
    const updatedTodoList = todo.filter((task) => task.id !== id);
    setTodo(updatedTodoList);
  };
  return (
    <>
      <p>{task}</p>
      <Button onClick={deleteTask} BtnText="Delete" />
    </>
  );
};
export default Task;
