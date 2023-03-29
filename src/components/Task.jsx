import React, { useState } from 'react'
import '../App.css'
import { AiFillEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import ModalWindow from './ModalWindow';

const Task = ({ todo, deleteTodo, setCompleted, setEdit }) => {

  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [toggleModal, setToggleModal] = useState(false);
  const [todoText, setTodoText] = useState(todo.text)

  const handleDelete = () => {
    deleteTodo(todo.id);
  }

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
    setCompleted(todo.id);
  }

  const toggleEdit = () => {
    setToggleModal(!toggleModal);
  }

  const editTask = (taskText) => {
    console.log(taskText);
    setTodoText(taskText);
  }


  return (
    <div className='task'>
      {isCompleted ? <s>{todoText}</s> : todoText}
      <div className="iconWrap">
        <span onClick={toggleCompleted} >
          <FcCheckmark />
        </span>
        <span>
          <AiFillEdit onClick={() => setToggleModal(true)} />
          {toggleModal && <ModalWindow modalToggle={toggleEdit} taskText={todo.text} updatedTask={editTask} />}
        </span>
        <span onClick={handleDelete}>
          <BsTrash style={{ color: "#7f0304" }} />
        </span>
      </div>
    </div>
  )
}

export default Task