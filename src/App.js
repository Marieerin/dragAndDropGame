import './App.css';
import React, { useState } from 'react';

function DraggingShapes() {
  const [shape, setShape] = useState('');
  const [buttonVisibility, setButtonVisibility] = useState('');

  let isDragging = false;
  let x = 0;
  let y = 0;
  let shapes = ['square', 'circle', 'triangle', 'pentagon'];

  // START GAME FUNCTION
    // 
  let start = () => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);
    setButtonVisibility('none');
  }

  // drag function
  // follow mouse
  // check if dragged shape 
    // check x & y axis between a 150px radius 
    // if same class name is same call start function 
      // correct function (not made yet) call that too
    // if class name isnt same then return to starting position 
      // call tryAgain function (not made yet)

  return (
    <div className="App">
      <h1>Drag and Drop! Match the Shapes!</h1>
      <div id='canvas'>
        {/*   SHAPE PORT -------------------------------------- */}
        <div className="shapePort">
          <div className="square"></div>
          <div className="triangle"></div>
          <div className="circle"></div>
          <div className="pentagon"></div>
        </div>
        {/*   DRAG PORT -------------------------------------- */}
        <div className="dragPort">
          <button 
          onClick={start} 
          style={{display: `${buttonVisibility}`}}
          id="startButton"
          >
            start
          </button>
          <div className={shape} onClick={start}></div>
        </div>
      </div>
      <button id="restartButton"> 
        restart
      </button>
    </div>
  );
}

export default DraggingShapes;
