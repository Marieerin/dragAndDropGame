import './App.css';
import React, { useState } from 'react';

function DraggingShapes() {
  const [shape, setShape] = useState('');
  const [buttonVisibility, setButtonVisibility] = useState('');
  const [level, setLevel] = useState('');
  let shapes = ['square', 'circle', 'triangle', 'pentagon'];
  let levels = ['Level 1', 'Level 2', 'Level 3'];

  // When shape is clicked isDragging becomes true
  let isDragging = false;
  let x = 0;
  let y = 0;

  let draggingCanvas = document.getElementById('canvas');

  // START GAME FUNCTION
  let start = () => {
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);
    setButtonVisibility('none');
    setLevel(levels[0]);
  };

  // RESTART GAME FUNCTION
  let restart = () => {
    setShape('');
    setButtonVisibility('');
  };

  // drag function (may be broken down into many functions)
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
          <div className="square draggable" draggable='true'></div>
          <div className="triangle draggable" draggable='true'></div>
          <div className="circle draggable" draggable='true'></div>
          <div className="pentagon draggable" draggable='true'></div>
        </div>
        {/*   DRAG PORT -------------------------------------- */}
        <div className="dragPort">
          <span id="level">
            {level}
          </span>
          <button 
          onClick={start} 
          style={{display: `${buttonVisibility}`}}
          id="startButton"
          >
            start
          </button>
          {/* on hover might trigger shapecheck */}
          <div className={shape} onClick={start}></div>
        </div>
      </div>
      <button id="restartButton" onClick={restart}> 
        restart
      </button>
    </div>
  );
}

export default DraggingShapes;
