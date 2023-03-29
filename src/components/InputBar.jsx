import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputBar = ({ newTodo }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    newTodo(newTask);
    setNewTask("");
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        value={newTask}
        placeholder="Add Task Todo"
        aria-label="Add Task Todo"
        aria-describedby="basic-addon2"
        onChange={(e) => handleChange(e)}
      />
      <Button
        variant="success"
        id="button-addon2"
        onClick={handleClick}
        disabled={newTask ? false : true}>
        +
      </Button>
    </InputGroup>
  )
}

export default InputBar