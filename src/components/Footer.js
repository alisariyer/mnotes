import React from "react";

export default function Footer({ isDelete, handleAction }) {
    const imageName = isDelete ? "delete" : "add";
    return (
        <footer className="footer">
            <img className="button-add" src={`./images/${imageName}.png`} alt="add button" onClick={() => handleAction(isDelete)}/>
        </footer>
    )
}