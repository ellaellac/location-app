const Task = ({ id, task, setTodo, todo }) => {
  const deleteTask = () => {
    const updatedTodoList = todo.filter((task) => task.id !== id);
    setTodo(updatedTodoList);
  };
  return (
    <>
      <p id={id}>{task}</p>
      <button onClick={deleteTask}>Delete</button>
    </>
  );
};
export default Task;
