import React from "react";
import Note from './Note';

export default function Body({ notes , handleIsFavorite, onlyFavorites }) {

    const cards = notes.map((note) => 
        // if the favorite star is clicked on header filter only favorites notes else show all
        onlyFavorites ? 
            note.isFavorite ?
                <Note key={note.id} note={note} handleIsFavorite={handleIsFavorite}/> : ""
            : <Note key={note.id} note={note} handleIsFavorite={handleIsFavorite}/>)
    return (
        <main>
            { cards }
        </main>
    )
}