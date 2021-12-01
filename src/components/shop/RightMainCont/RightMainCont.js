import styles from "./RightMainCont.module.css";
import BotCont from "./BotCont/BotCont";
import ShoppingCart from "./ShoppingCart";
import { navAnimation, ProductAnimation } from "../../../animations";
import { useRef, useEffect, useState } from "react";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";

function RightMainCont(props) {
  const headerRef = useRef();
  const productRef = useRef();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const { name, price, bgc, imageSource, modelNumber } = props.selection;

  // Removes item from Shopping Cart Modal
  const deleteItem = (delKey) => {
    setShoppingCart((prevState) => {
      return prevState.filter((item) => item.key !== delKey);
    });
  };

  // Used to activate the Shopping Cart Modal
  const clickHandlerCartOn = () => {
    setShowShoppingCart(true);
  };

  // Turns off the Shopping Cart Modal
  const clickHandlerCartOff = () => {
    setShowShoppingCart(false);
  };

  const addItemToCart = (selection) => {
    setShoppingCart((prevState) => {
      return [...prevState, selection];
    });
  };

  useEffect(() => {
    navAnimation(headerRef.current);
    ProductAnimation(productRef.current);
  }, []);

  return (
    <div
      className={`${props.className} rightCont`}
      style={{ backgroundColor: `${bgc}` }}
    >
      {showShoppingCart && (
        <ShoppingCartModal
          shoppingCart={shoppingCart}
          removeItem={deleteItem}
          length={shoppingCart.length}
          clickHandler={clickHandlerCartOff}
        />
      )}

      <header className={styles.header} ref={headerRef}>
        <div>
          <strong>Model</strong> : <em>{modelNumber}</em>
        </div>
        <ShoppingCart
          shoppingCart={shoppingCart}
          clickHandler={clickHandlerCartOn}
        />
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
        src={imageSource}
        addItem={addItemToCart}
      />
    </div>
  );
}

export default RightMainCont;
