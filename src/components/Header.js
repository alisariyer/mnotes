import React from "react";

export default function Header( { onlyFavorites, handleOnlyFavorites }) {
    const imageName = onlyFavorites ? "star-fill-white" : "star-empty-white";
    return (
        <header className="header">
            <h1><span>m</span>Notes</h1>
            <img className="star" src={`./images/${imageName}.png`} alt="empty star" onClick={handleOnlyFavorites}/>
        </header>
    )
}