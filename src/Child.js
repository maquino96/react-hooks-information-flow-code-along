import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({onClickHandler, color}) {

  return <div className="child" style={{ backgroundColor: color }} onClick={onClickHandler}  />;
}

export default Child;
