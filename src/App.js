import React, { useState, useEffect } from "react";
import {nanoid} from 'nanoid';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import data from "./data.json";

export default function App() {
  // use notes state to initialize Note components
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || data.notes);

  // handleIsFavorite is to manage note's favorite status
  const handleIsFavorite = (e, id) => {
    e.stopPropagation();
    setNotes((prevNotes) => {
      return prevNotes.map((note) =>
        note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
      );
    });
  };

  // to manage to show only notes that have a favorite status
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // if the user click on star on the header to show only favorite notes
  const handleOnlyFavorites = () => {
    setOnlyFavorites((prevState) => !prevState);
  };

  // to handle if any element selected
  const [isAnySelected, setIsAnySelected] = useState(false);

  // handle if any card is selected
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setIsAnySelected(notes.some((note) => note.isSelected));
  }, [notes]);

  // handle double click on card
  const handleSelection = (id) => {
    // if between mouseDown and mouseUp delay smaller than 5 seconds ignore
    const delay = new Date() - seconds;
    console.log(delay);

    if (delay < 300) return;
    setNotes((prevNotes) => {
      return prevNotes.map((note) =>
        note.id === id ? { ...note, isSelected: !note.isSelected } : note
      );
    });
  };

  // to check if modal is shown or not in case of delete note(s)
  const [modal, setModal] = useState(false);

  // handle action as delete or add a new note
  const handleAction = (isDelete) => {
    if (isDelete) {
      setModal(true);
    } else {
      setIsEdit(true);
    }
  };

  // to delete selected notes
  const handleDelete = (isYes) => {
    setModal(false);
    if (isYes) {
      setNotes((prevNotes) => prevNotes.filter((note) => !note.isSelected));
    }
  };

  // to add a new note
  const [isEdit, setIsEdit] = useState(false);

  // to calculate the time between mouse down and mouse up on card
  const [seconds, setSeconds] = useState(0);

  // to handle edit operation wh
  const handleEdit = (note) => {
    setCurrentNote(note);
    setIsEdit(true);
  }

  const handleMouseDown = () => {
    const seconds = new Date();
    setSeconds(seconds);
  }

  // To discard edit
  const discardEdit = () => {
    setIsEdit(false);
  }
console.log('heee')
  // Keep currentNoteId if the note is double clicked to edit
  const [currentNote, setCurrentNote] = useState(null);

  // To save new note or update note
  const saveEdit = (e, editedNote) => {
    e.preventDefault();
    if (editedNote) {
      setNotes(prevNotes => {
        return prevNotes.map(note => note.id === editedNote.id ? 
          { ...note, title: e.target[0].value, note: e.target[1].value} :
          note)
      })
    } else {
      setNotes(prevNotes => [
        ...prevNotes,
        {
          id: nanoid(),
          title: e.target[0].value,
          note: e.target[1].value,
          createdAt: '08:07 2022/02/20',
          isFavorite: false,
          isSelected: false
        }
      ])
    }
    setIsEdit(false);
    setCurrentNote(null);
  }

  return (
    <>
      {modal && <Modal handleDelete={handleDelete} />}
      <div className="cover"></div>
      <Header
        onlyFavorites={onlyFavorites}
        handleOnlyFavorites={handleOnlyFavorites}
      />
      <div className="container">
        {/* Send onlyFavorites to body to filter there */}
        <Body
          notes={notes}
          handleIsFavorite={handleIsFavorite}
          onlyFavorites={onlyFavorites}
          handleSelection={handleSelection}
          isEdit={isEdit}
          handleEdit={handleEdit}
          handleMouseDown={handleMouseDown}
          discardEdit={discardEdit}
          currentNote={currentNote}
          saveEdit={saveEdit}
        />
        {!isEdit && <Footer isDelete={isAnySelected} handleAction={handleAction} />}
      </div>
    </>
  );
}
