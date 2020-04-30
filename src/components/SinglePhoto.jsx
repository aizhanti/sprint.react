import React from "react";
import { getSingleObject } from "../utils";

export default function SinglePhoto(prop) {
  return (
    <img src={prop.imgStr} alt="Single_Photo" className="singlePhoto"></img>
  );
}
