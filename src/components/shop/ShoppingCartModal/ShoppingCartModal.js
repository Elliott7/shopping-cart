import React from "react";
import styles from "./ShoppingCartModal.module.css";
import ShoppingCartItem from "../RightMainCont/ShoppingCartItem/ShoppingCartItem";

// This is the pop up modal for when you click on the shopping cart button
const ShoppingCartModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.cartBackdrop} onClick={props.clickHandler}>
        {" "}
      </div>
      <div className={styles.cartModal}>
        <header className={styles.cartHeader}>
          <h2>
            Your Cart{" "}
            <span>
              ({props.length} {props.length === 1 ? "item" : "items"})
            </span>
          </h2>
        </header>
        <div className={styles.cartContent}>
          <div>
            {props.shoppingCart.map((item) => {
              return (
                <ShoppingCartItem
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  itemKey={item.key}
                  removeItem={props.removeItem}
                />
              );
            })}
          </div>
        </div>
        <footer className={styles.cartActions}>
          <button onClick={props.clickHandler}>Checkout</button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCartModal;
