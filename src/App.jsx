import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./App.css";
import InputBar from "./components/InputBar";
import Task from "./components/Task";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 0,
      text: "Learn React",
      completed: false,
    },
    {
      id: 1,
      text: "Buy groceries",
      completed: true,
    },
    {
      id: 2,
      text: "Finish cleaning",
      completed: false,
    },
  ]);

  const [hideTasks, setHideTasks] = useState(false);

  const addTask = (taskText) => {
    setToDo([
      ...toDo,
      {
        id: toDo.length + 1,
        text: taskText,
        completed: false,
      },
    ]);
  };

  const delTodo = (id) => {
    const newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const updateCompleted = (id) => {
    const updatedTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setToDo(updatedTask);
  };

  const handleHide = () => {
    setHideTasks(!hideTasks);
  };

  const deleteDone = () => {
    const doneTasks = toDo.filter((task) => task.completed === false);
    setToDo(doneTasks);
  };

  return (
    <div className="wrapper">
      <h1>Todo App</h1>
      <InputBar newTodo={addTask}></InputBar>
      {!hideTasks &&
        toDo.map((task) => (
          <Task
            key={task.id}
            todo={task}
            deleteTodo={delTodo}
            setCompleted={updateCompleted}
          />
        ))}
      <Button className="endButtons" onClick={handleHide}>
        Hide all
      </Button>
      <Button className="endButtons" onClick={deleteDone}>
        Delete Done
      </Button>
    </div>
  );
}

export default App;
