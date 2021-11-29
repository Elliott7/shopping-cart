import styles from "./Sizes.module.css";
import React from "react";

const arrayOfSizes = [30, 33, 35, 36, 39];
function Sizes(props) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {arrayOfSizes.map((size) => {
          return (
            <div className={styles.sizeCont} key={Math.random()}>
              <div className={styles.size}>{size}</div>
              <div className={styles.dot}></div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Sizes;
