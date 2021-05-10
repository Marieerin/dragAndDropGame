import './App.css';

function draggingShapes() {

  let shapes = ['.square', '.circle', '.triangle']

  let start = () => {
    console.log(Math.floor(Math.random() * shapes.length));
  }
  
  return (
    <div className="App">
      {/*   SHAPE PORT -------------------------------------- */}
      <div className="shapePort">
        <div className="square"></div>
        <div className="triangle"></div>
        <div className="circle"></div>
      </div>
      <div className="dragPort">
        <button onClick={start}>start</button>
      </div>
    </div>
  );
}

export default draggingShapes;
