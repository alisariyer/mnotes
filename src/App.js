import React, { useState, useEffect } from "react";
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
  const handleEdit = (id) => {
    console.log('mouse down -- handleEdit')
  }

  const handleMouseDown = () => {
    const seconds = new Date();
    setSeconds(seconds);
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
        />
        <Footer isDelete={isAnySelected} handleAction={handleAction} />
      </div>
    </>
  );
}
