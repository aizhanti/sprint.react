import React from "react";
import "../styles/styles.css";

export default function AllPhotos(prop) {
  const imgArr = [];
  prop.photoString.forEach(str => {
    let img = "data:image/jpeg;base64," + str;
    imgArr.push(
      <>
        <img
          className="image imageCell"
          src={img}
          alt="awesome"
          onClick={e => {
            prop.updateSelectedPhoto(e.target.src);
          }}
        />
      </>
    );
  });
  console.log(prop.visibility);
  return <div style={{ display: prop.visibility }}>{imgArr}</div>;
}
