import React from 'react'
import NoteApp from './application/notes_app/NoteApp'
import PasswordGenerator from './application/password_generator/PasswordGenerator'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './application/Home'
import Question from './application/quiz_app/card/Question'
import ToDoList from './application/todolist/ToDoList'
import Weather from './application/weather_app/Weather'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noteapp' element={<NoteApp />} />
        <Route path='/passwordgenerator' element={<PasswordGenerator />} />
        <Route path='/quiz' element={<Question />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App