import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.body}>
      <div className={style.title}>Home Page</div>
      <div className={style.boxes}>
        <NavLink className={style.box} to="/noteapp">Note App</NavLink>
        <NavLink className={style.box} to="/passwordgenerator">Password Generator</NavLink>
        <NavLink className={style.box} to="/quiz">Quiz</NavLink>
        <NavLink className={style.box} to="/todolist">To Do List</NavLink>
        <NavLink className={style.box} to="/weather">Weather</NavLink>
      </div>
    </div>
  )
}

export default Home