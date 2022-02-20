import React from "react";

export default function Footer({ isDelete }) {
    const imageName = isDelete ? "delete" : "add";
    return (
        <footer className="footer">
            <img className="button" src={`./images/${imageName}.png`} alt="add button" />
        </footer>
    )
}