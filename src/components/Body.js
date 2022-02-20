import React from "react";
import Note from './Note';

export default function Body({ notes , handleIsFavorite }) {
    const cards = notes.map((note) => <Note key={note.id} note={note} handleIsFavorite={handleIsFavorite}/>)
    return (
        <main>
            { cards }
        </main>
    )
}