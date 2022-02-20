import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="cover"></div>
      <Header />
      <div className="container">
        <Body />
        <Footer />
      </div>
    </>
  );
}
