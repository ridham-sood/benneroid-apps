import React, { useState } from 'react'
import NoteInput from './note/Note'

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addInput = () => {
    setNotes([...notes, '']);
    localStorage.setItem("Notes", notes);
    console.log(notes);
  }

  const handleNoteChange = (index, value) => {
    const tempNotes = [...notes];
    tempNotes[index] = value;
    setNotes(tempNotes);
  }

  const deleteInput = (index) => {
    const tempNotes = [...notes];
    tempNotes.pop(index);
    setNotes(tempNotes);
  }

  return (
    <div>
      <h1>My note App</h1>
      <div>
        <button onClick={addInput}>Add</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <NoteInput key={index} note={note} handleNoteChange={handleNoteChange} deleteInput={deleteInput} index={index} />
        ))}
      </div>
    </div>
  )
}

export default NoteApp