import styles from "./RightMainCont.module.css";
import BotCont from "./BotCont/BotCont";
import ShoppingCart from "./ShoppingCart";
import { navAnimation, ProductAnimation } from "../../../animations";
import { useRef, useEffect, useState } from "react";

function RightMainCont(props) {
  const headerRef = useRef();
  const productRef = useRef();
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (selection) => {
    setShoppingCart((prevState) => {
      return [...prevState, selection];
    });
  };

  const { name, price, bgc, imageSource, modelNumber } = props.selection;

  useEffect(() => {
    navAnimation(headerRef.current);
    ProductAnimation(productRef.current);
  }, []);
  return (
    <div
      className={`${props.className} rightCont`}
      style={{ backgroundColor: `${bgc}` }}
    >
      <header className={styles.header} ref={headerRef}>
        <div>
          <strong>Model</strong> : <em>{modelNumber}</em>
        </div>
        <ShoppingCart shoppingCart={shoppingCart} />
      </header>
      <div className={styles.middle} ref={productRef}>
        <img
          src={imageSource}
          className={styles.mainPicture}
          alt="Selected Shoe"
        />
      </div>
      <BotCont
        className={styles.bottom}
        name={name}
        price={price}
        addItem={addItemToCart}
      />
    </div>
  );
}

export default RightMainCont;
