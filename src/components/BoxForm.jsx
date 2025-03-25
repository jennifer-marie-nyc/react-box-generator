import { useState } from "react";

const BoxForm = (props) => {
  const { addNewBox } = props;
  const [color, setColor] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [dimensionsError, setDimensionsError] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    const newBox = { color, dimensions };
    setColor("");
    setDimensions("");
    addNewBox(newBox);
  };

  const handleDimensions = (e) => {
    setDimensions(e.target.value);
    if (e.target.value < 2 || e.target.value > 25) {
      setDimensionsError("Please enter a box size between 2 and 25");
    } else {
      setDimensionsError("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mb-5 py-3 px-3">
        <h1 className="text-center mb-5">Box Generator</h1>
        <form onSubmit={createBox}>
          <div className="row mb-3">
            <label
              htmlFor="color"
              className="form-label col-3 col-form-label col-form-label-lg"
            >
              Color:
            </label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              id="color"
              className="col-8 form-control form-control-lg"
            />
          </div>
          <div className="row mb-3">
            <label
              htmlFor="dimensions"
              className="form-label col-3 col-form-label col-form-label-lg"
            >
              {" "}
              Height and width:
            </label>
            <input
              type="number"
              value={dimensions}
              onChange={handleDimensions}
              id="dimensions"
              className="col-8 form-control form-control-lg"
            />
            {dimensionsError ? (
              <p className="text-danger">{dimensionsError}</p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="Add" className="col-1 btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default BoxForm;
