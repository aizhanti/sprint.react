import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { For } from "react-loops";
import "../styles/styles.css";

// const allPhotoStr = allPhotoString.map(
//   (pht) => "data:image/jpeg;base64," + pht,
// );

export default function AllPhotos(prop) {
  const top10 = prop.photoString.slice(0, 10);
  const imgArr = [];
  top10.forEach(str => {
    let img = "data:image/jpeg;base64," + str;
    imgArr.push(
      <>
        <img
          className="image imageCell"
          src={img}
          alt="awesome image"
          onClick={e => {
            prop.updateSelectedPhoto(e.target.src);
          }}
        />
      </>
    );
  });
  console.log(prop.visibility);
  return <div style={{ display: prop.visibility }}>{imgArr}</div>;
  // return <div style={{ display: prop.visibility }}>imgArr</div>;
}
