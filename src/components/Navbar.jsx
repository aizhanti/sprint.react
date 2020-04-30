import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import "../styles/navbar.css";

export default function Navbar(prop) {
  return (
    <div className="navbar">
      <a className="navbar-header" href="/" onClick={prop.goBackToAllPhotos}>
        Home
      </a>
      <Upload />
    </div>
  );
}
