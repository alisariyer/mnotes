import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import data from "./data.json";

export default function App() {
  // use notes state to initialize Note components
  const [notes, setNotes] = useState(data.notes);

  // handleIsFavorite is to manage note's favorite status
  const handleIsFavorite = (id) => {
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

  return (
    <>
      <div className="cover"></div>
      <Header onlyFavorites={onlyFavorites} handleOnlyFavorites={handleOnlyFavorites}/>
      <div className="container">
        {/* Send onlyFavorites to body to filter there */}
        <Body notes={notes} handleIsFavorite={handleIsFavorite} onlyFavorites={onlyFavorites}/>
        <Footer />
      </div>
    </>
  );
}
