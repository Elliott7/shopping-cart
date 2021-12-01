import styles from "./Sizes.module.css";
import React from "react";

const arrayOfSizes = [30, 33, 35, 36, 39];
function Sizes(props) {
  const saveShoeSize = (e) => {
    props.updateSize(e.target.dataset.msg);
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        {arrayOfSizes.map((size) => {
          return (
            <button
              className={styles.sizeCont}
              key={Math.random()}
              onClick={saveShoeSize}
              data-msg={size}
            >
              <div className={styles.size} data-msg={size}>
                {size}
              </div>
              <div className={styles.dot} data-msg={size}>
                {" "}
              </div>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Sizes;
