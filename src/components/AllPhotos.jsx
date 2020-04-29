import React from "react";
import _ from "lodash";

import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function AllPhotos() {
  return <>{listObjects}</>;
}
