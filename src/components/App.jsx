import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photo, setPhoto] = useState([]);
  const [visibility, setVisibility] = useState("block");

  const handleImageUpload = e => {
    e.preventDefault();
    saveObject(e.target.files[0]);
  };

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

  //Navbar

  function goBackToAllPhotos() {
    setCurrentView("AllPhotos");
    console.log("currentView", currentView);
  }

  function updateSelectedPhoto(selPhoto) {
    setSelectedPhoto(selPhoto);
    setCurrentView("SinglePhoto");
    setVisibility("hidden");
  }

  return (
    <div className="app">
      <Navbar
        goBackToAllPhotos={goBackToAllPhotos}
        handleImageUpload={handleImageUpload}
      />
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
