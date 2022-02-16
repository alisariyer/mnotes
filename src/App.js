import React from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Buttons from "./components/Buttons"

export default function App() {
  return (
    <div className="container">
      <Header />
      <Notes />
      <Buttons />
    </div>
  );
}
