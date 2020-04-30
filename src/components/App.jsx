import React, { useState, useEffect, useRef } from "react";
import style from "../styles/styles.css";
import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photo, setPhoto] = useState([]);
  const [visibility, setVisibility] = useState("block");

  const listPhotos = async () => {
    try {
      let foto = await listObjects();
      const allPhotoString = await Promise.all(
        foto.map(pht => getSingleObject(pht.Key))
      );
      setPhoto(allPhotoString);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    listPhotos();
  }, [currentView]);

  useEffect(() => {});

  //Navbar

  function goBackToAllPhotos() {
    setCurrentView("AllPhotos");
    console.log("currentView", currentView);
  }

  function updateSelectedPhoto(selPhoto) {
    setSelectedPhoto(selPhoto);
    setCurrentView("SinglePhoto");
    setVisibility("hidden");
    console.log(currentView);
    console.log(visibility);
  }

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Navbar goBackToAllPhotos={goBackToAllPhotos} />
      <div>
        {currentView === "SinglePhoto" ? (
          <SinglePhoto className="singlePhoto" imgStr={selectedPhoto} />
        ) : (
          <AllPhotos
            visibility={visibility}
            photoString={photo}
            updateSelectedPhoto={updateSelectedPhoto}
          />
        )}
      </div>
    </div>
  );
}
