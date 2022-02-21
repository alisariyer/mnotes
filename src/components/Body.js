import React from "react";
import Note from "./Note";
import NewNote from "./NewNote"

export default function Body({
  notes,
  handleIsFavorite,
  onlyFavorites,
  handleSelection,
  isEdit,
  handleEdit,
  handleMouseDown,
  discardEdit,
  currentNote,
  saveEdit
}) {
  const cards = notes.map((note) =>
    // if the favorite star is clicked on header filter only favorites notes else show all
    onlyFavorites ? (
      note.isFavorite ? (
        <Note
          key={note.id}
          note={note}
          handleIsFavorite={handleIsFavorite}
          handleSelection={handleSelection}
          handleEdit={handleEdit}
          handleMouseDown={handleMouseDown}
          />
          ) : (
              ""
              )
              ) : (
                  <Note
                  key={note.id}
                  note={note}
                  handleIsFavorite={handleIsFavorite}
                  handleSelection={handleSelection}
                  handleEdit={handleEdit}
                  handleMouseDown={handleMouseDown}
      />
    )
  );
  return <main>{isEdit ? <NewNote discardEdit={discardEdit} currentNote={currentNote} saveEdit={saveEdit}/> : cards}</main>;
}
