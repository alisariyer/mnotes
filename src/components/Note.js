import React from "react";

export default function Note() {
  return (
    <section class="card">
      <header>
        <h2>Note 1</h2>
        <img class="star" src="./images/star-empty-blue.png" alt="star filled" />
      </header>
      <div>
        <p class="note">Here some notes all about you but </p>
      </div>
      <footer>
        <p>Created at <time datetime="2022-05-15T12:30">12:30, 2022/02/20</time></p>
      </footer>
    </section>
  );
}
