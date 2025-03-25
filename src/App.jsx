import { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";

function App() {
  const [boxesArray, setBoxesArray] = useState([]);

  const addNewBox = (newBoxObj) => {
    const updatedBoxesArray = [...boxesArray, newBoxObj];
    setBoxesArray(updatedBoxesArray);
  };

  const deleteBox = (deletedBox) => {
    let filteredBoxes = boxesArray.filter((box) => box != deletedBox);
    setBoxesArray(filteredBoxes);
  };

  return (
    <div>
      <BoxForm addNewBox={addNewBox} />
      <BoxDisplay allBoxes={boxesArray} deleteBox={deleteBox} />
    </div>
  );
}

export default App;
