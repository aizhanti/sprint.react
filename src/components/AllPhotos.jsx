import React from "react";
import _ from "lodash";
import { For } from "react-loops";

// function append(imgString) {
//   return (
//     <img
//       src={`data:image/jpeg;base64,${imgString}`}
//       alt="Single_Photo"
//       className="singlePhoto"
//     ></img>
//   );
// }

export default function AllPhotos(prop) {
  // if (prop.photoString.length !== 0) {
  const top20 = prop.photoString.slice(0, 20);
  const imgArr = [];
  top20.forEach(img => {
    imgArr.push(
      <>
        <img src={img} alt="our_image" />
      </>
    );
  });
  return imgArr;
  // }
}
