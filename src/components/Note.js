import React from "react";

export default function Note({note, handleIsFavorite, handleSelection, handleEdit, handleMouseDown }) {
  const imageEmpty = note.isSelected ? "star-empty-white" : "star-empty-blue";
  const imageFill = note.isSelected ? "star-fill-white" : "star-fill-blue";
  const imageName = note.isFavorite ? imageFill : imageEmpty;
  return (
    <section className={`card ${note.isSelected ? 'selected' : ''}`} onDoubleClick={() => handleEdit(note)} onMouseDown={handleMouseDown} onMouseUp={() => handleSelection(note.id)} onTouchStart={handleMouseDown} onTouchEnd={() => handleSelection(note.id)}>
      <header>
        <h2>{note.title}</h2>
        <img className="star" src={`./images/${imageName}.png`} alt="star" onClick={(e) => handleIsFavorite(e, note.id)}/>
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
