import React from "react";

export default function Note({note, handleIsFavorite}) {
  const imageName = note.isFavorite ? "star-fill-blue" : "star-empty-blue";
  return (
    <section className="card">
      <header>
        <h2>{note.title}</h2>
        <img className="star" src={`./images/${imageName}.png`} alt="star filled" onClick={() => handleIsFavorite(note.id)}/>
      </header>
      <div>
        <p className="note">{note.note}</p>
      </div>
      <footer>
        <p>Created at <time dateTime={`${note.createdAt.slice(6)}T${note.createdAt.slice(0,5)}`}>{note.createdAt}</time></p>
      </footer>
    </section>
  );
}
