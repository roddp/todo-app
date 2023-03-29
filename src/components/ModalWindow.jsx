import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalWindow = ({ modalToggle, taskText, updatedTask }) => {
  const [show, setShow] = useState(true);
  const [updatedText, setUpdatedText] = useState(taskText);

  const handleClose = () => {
    setShow(false);
    modalToggle();
  }

  const changeHandler = (e) => {
    setUpdatedText(e.target.value);
  }

  const handleSubmit = () => {
    updatedTask(updatedText);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" defaultValue={updatedText} onChange={(e) => changeHandler(e)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow