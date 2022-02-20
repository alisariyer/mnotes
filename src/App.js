import React, {useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import data from './data.json';

export default function App() {
  const [notes, setNotes] = useState(data.notes);
  const handleIsFavorite = (id) => {
    setNotes(prevNotes => {
      return prevNotes.map(
        note => note.id === id ? 
        { ...note, isFavorite: !note.isFavorite} :
        note)
    })
  }
  return (
    <>
      <div className="cover"></div>
      <Header />
      <div className="container">
        <Body notes={notes} handleIsFavorite={handleIsFavorite}/>
        <Footer />
      </div>
    </>
  );
}
