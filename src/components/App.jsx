import React, { useState, useEffect, useRef } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import SinglePhoto from "./SinglePhoto";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photo, setPhoto] = useState([]);

  const listPhotos = async () => {
    try {
      let foto = await listObjects();
      const allPhotoString = await Promise.all(
        foto.map(pht => getSingleObject(pht.Key))
      );
      const allPhotoStr = allPhotoString.map(
        pht => "data:image/jpeg;base64," + pht
      );
      setPhoto(allPhotoStr);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    listPhotos();
  }, []);

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Navbar />
      <AllPhotos photoString={photo} />
      {/* <SinglePhoto /> */}
    </div>
  );
}
