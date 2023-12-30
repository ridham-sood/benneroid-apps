import React from 'react'

const Note = ({ note, handleNoteChange, deleteInput, index }) => {
    return (
        <div key={index}>
            <input
                type='text'
                value={note}
                onChange={(event) => handleNoteChange(index, event.target.value)}
            />
            <button onClick={() => deleteInput(index)}>Delete</button>
        </div>
    )
}

export default Note