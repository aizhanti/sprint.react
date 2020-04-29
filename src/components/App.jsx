import React, { useState, useEffect, useRef } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import AllPhotos from "./AllPhotos";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photo, setPhoto] = useState([]);

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Navbar />
      <AllPhotos />
      <SinglePhoto />
    </div>
  );
}
