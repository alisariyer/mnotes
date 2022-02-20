import React from "react";

export default function Modal({ handleDelete }) {
    return (
        <div className="modal">
            <div className="modal-card">
                <h3>Do you want to delete selected notes permanently?</h3>
                <div className="button-group">
                    <button type="button" className="button yes" onClick={() => handleDelete(true)}>Yes</button>
                    <button type="button" className="button no" onClick={() => handleDelete(false)}>No</button>
                </div>
            </div>
        </div>
    )
}