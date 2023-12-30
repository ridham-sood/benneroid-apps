import React, { useState } from 'react'
import './task.css'
const Task = ({ tasks, remove }) => {

    const [checkTask, setCheckTask] = useState([]);

    function handleOnClick(index) {
        setCheckTask((prev) => {
            const isChecked = prev.includes(index);

            if (isChecked) {
                return prev.filter((i) => i != index)
            } else {
                return [...prev, index];
            }
        })
    }

    return (
        <>
            {tasks.map((task, index) => (
                <div className='task-body' key={index} >
                    <div className='checkbox-wrapper'>
                        <input type="checkbox" className='button-checkbox' onClick={() => handleOnClick(index)} />
                        <p className={checkTask.includes(index) ? 'message checked' : 'message'} >{task}</p>
                    </div>
                    <div className='wrapper-button'>
                        <button className='button-remove' onClick={() => remove(index)} >-</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Task