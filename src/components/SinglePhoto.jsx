import React from "react";

export default function SinglePhoto(prop) {
  return (
    <img src={prop.imgStr} alt="Single_Photo" className="singlePhoto"></img>
  );
}
