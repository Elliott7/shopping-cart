import NavBar from "../navbar/NavBar";
import styles from "./RightMainCont.module.css";
import BotCont from "./BotCont/BotCont";
import ShoppingCart from "./ShoppingCart";
import { navAnimation } from "../../../animations";
import { useRef, useEffect } from "react";

function RightMainCont(props) {
  const headerRef = useRef();
  const { name, price, bgc, imageSource, id, modelNumber } = props.selection;

  useEffect(() => {
    navAnimation(headerRef.current);
  }, []);
  return (
    <div className={props.className} style={{ backgroundColor: `${bgc}` }}>
      <header className={styles.header} ref={headerRef}>
        <div>
          <strong>Model</strong> : <em>{modelNumber}</em>
        </div>
        <ShoppingCart />
      </header>
      <div className={styles.middle}>
        <img src={imageSource} className={styles.mainPicture} alt="" />
      </div>
      <BotCont className={styles.bottom} />
    </div>
  );
}

export default RightMainCont;
