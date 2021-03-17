import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  const [childColor, setChildColor] = useState('#FFF')

  function handleChildClick (event) {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    
    const randomChildColor = getRandomColor()
    setChildColor(randomChildColor)

  
    // console.log(randomColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onClickHandler={handleChildClick} color={childColor}/>
      <Child onClickHandler={handleChildClick} color={childColor}/>
    </div>
  );
}

export default Parent;
