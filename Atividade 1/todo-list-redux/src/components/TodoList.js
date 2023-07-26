// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/todoSlice';
import TaskItem from './TaskItem';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/TodoList.css'

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <div className="container">
      <h1>Atividade 1</h1>
      <h2>Lista de Tarefas</h2>
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ListGroup as="ul">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
