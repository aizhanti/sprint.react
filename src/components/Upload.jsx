import React, { createRef } from "react";
import "../styles/upload.css";

export default function Upload(prop) {
  let someRef = createRef();

  const openWindow = () => {
    someRef.current.click();
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          prop.handleImageUpload(e);
        }}
        name="filename"
        ref={someRef}
      />
      <button onClick={() => openWindow()}>Upload</button>
    </div>
  );
}
