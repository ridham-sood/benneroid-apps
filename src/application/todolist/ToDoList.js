import React, { useState } from 'react'
import Task from './task/Task';
import './todolist.css'


const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([])

  function handleInputChange(event) {
    setTask(event.target.value)
  }

  function handleOnclick() {
    if (!task.trim()) {
      return;
    } else {

      setTasks([...tasks, task])
      setTask('');
    }
  }

  function remove(index) {
    const updateTask = tasks.filter((_, i) => i !== index)
    setTasks(updateTask);
  }


  return (
    <div className='todolist-body'>
      <div className='todolist-card'>
        <div className='todolist-card-body'>
          <div className='todolist-head'>
            <p>To Do List</p>
          </div>
          <div className='todolist-add-button'>
            <input className='todolist-head-input' value={task} onChange={handleInputChange} placeholder='task to add...' />
            <button className='todolist-head-button' onClick={handleOnclick} > Add </button>
          </div>
          <div>
            <Task tasks={tasks} remove={remove} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoList