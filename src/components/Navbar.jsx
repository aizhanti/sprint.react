import React from "react";
import "../styles/navbar.css";
import Upload from "./Upload";

export default function Navbar(prop) {
  return (
    <div className="navbar">
      <a className="navbar-header" href="/" onClick={prop.goBackToAllPhotos}>
        Home
      </a>
      <Upload
        handleImageUpload={prop.handleImageUpload}
        imageUploader={prop.imageUploader}
      />
    </div>
  );
}
