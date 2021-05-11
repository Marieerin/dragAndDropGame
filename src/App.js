import './App.css';
import React, { useState } from 'react';

function DraggingShapes() {
  const [shape, setShape] = useState('');
  const [buttonVisibility, setButtonVisibility] = useState('');

  let isDragging = false;
  let x = 0;
  let y = 0;
  let shapes = ['square', 'circle', 'triangle'];
  // let buttonVisitbility = ''


  let start = () => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);
    setButtonVisibility('hidden');
  }

  // drag function
  // follow mouse
  // check if dragged shape 

  return (
    <div className="App">
      <h1>Drag and Drop! Match the Shapes!</h1>
      <div id='canvas'>
        {/*   SHAPE PORT -------------------------------------- */}
        <div className="shapePort">
          <div className="square"></div>
          <div className="triangle"></div>
          <div className="circle"></div>
        </div>
        {/*   DRAG PORT -------------------------------------- */}
        <div className="dragPort">
          <button onClick={start} style={{visibility: `${buttonVisibility}`}}>start</button>
          <div className={shape} onClick={start}></div>
        </div>
      </div>
    </div>
  );
}

export default DraggingShapes;
