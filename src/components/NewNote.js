import React, { useState } from 'react'

export default function NewNote( {discardEdit, currentNote, saveEdit } ) {
    const [note, setNote] = useState(currentNote);
    console.log(note)
    function updateContent(e) {
        setNote(prevNote => ({
            ...prevNote,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <form onSubmit={(e) => saveEdit(e, currentNote)}>
            <input type="text" placeholder="Title" className="input input-title" name="title" value={note ? note.title : ''} onChange={(e) => updateContent(e)}/>
            <textarea placeholder="Title" className="input input-content" name="note" value={note ? note.note : ''} onChange={(e) => updateContent(e)}/>
            <div className="button-group">
                <button className="button no" type="button" onClick={discardEdit}>Discard</button>
                <button className="button yes" type="submit">Save</button>
            </div>
        </form>
    )
}