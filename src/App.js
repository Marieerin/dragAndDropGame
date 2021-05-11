import './App.css';
import React, { useState } from 'react';

function DraggingShapes() {
  const [shape, setShape] = useState('')

  let shapes = ['square', 'circle', 'triangle']

  let start = () => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)])
  }
  // console.log(shape);

  return (
    <div className="App">
      {/*   SHAPE PORT -------------------------------------- */}
      <div className="shapePort">
        <div className="square"></div>
        <div className="triangle"></div>
        <div className="circle"></div>
      </div>
      {/*   DRAG PORT -------------------------------------- */}
      <div className="dragPort">
        <button onClick={start}>start</button>
        <div className={shape}></div>
      </div>
    </div>
  );
}

export default DraggingShapes;
