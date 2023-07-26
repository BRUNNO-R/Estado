// src/components/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompletion } from '../features/todoSlice';
import ListGroup from 'react-bootstrap/ListGroup';

import '../styles/TodoList.css'
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <ListGroup.Item as="li" className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="button-group">
        <button onClick={handleToggleCompletion}>Done</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </ListGroup.Item>
  );
};

export default TaskItem;
