import styles from "../css/BoxDisplay.module.css";

const BoxDisplay = (props) => {
  const { allBoxes, deleteBox } = props;

  return (
    <div className={`card ${styles.boxContainer}`}>
      {allBoxes.map((box, index) => (
        <div
          key={index}
          className={styles.box}
          style={{
            backgroundColor: box.color,
            height: `${box.dimensions}rem`,
            width: `${box.dimensions}rem`,
          }}
          id={`box-${index}`}
        >
          <i className="bi bi-x text-white" onClick={() => deleteBox(box)}></i>
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;
