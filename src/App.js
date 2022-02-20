import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import data from "./data.json";

export default function App() {
  // use notes state to initialize Note components
  const [notes, setNotes] = useState(data.notes);

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
    setOnlyFavorites(prevState => !prevState);
  }

  // to handle if any element selected
  const [isAnySelected, setIsAnySelected] = useState(false);

  // handle if any card is selected
  useEffect(() => {
    setIsAnySelected(prevState => {
      console.log("in useEffect");
      return notes.some(note => note.isSelected)
    })
  }, [notes])

  // handle double click on card
  const handleSelection = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) =>
      note.id === id ? { ...note, isSelected: !note.isSelected } : note
      );
    });
  }

  return (
    <>
      <div className="cover"></div>
      <Header onlyFavorites={onlyFavorites} handleOnlyFavorites={handleOnlyFavorites}/>
      <div className="container">
        {/* Send onlyFavorites to body to filter there */}
        <Body notes={notes} handleIsFavorite={handleIsFavorite} onlyFavorites={onlyFavorites} handleSelection={handleSelection}/>
        <Footer isDelete={isAnySelected}/>
      </div>
    </>
  );
}
