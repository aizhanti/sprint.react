import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <Upload />
    </div>
  );
}
