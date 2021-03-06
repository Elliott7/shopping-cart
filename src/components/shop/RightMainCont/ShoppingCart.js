import styles from "./ShoppingCart.module.css";
function ShoppingCart(props) {
  return (
    <div className={styles.cont} onClick={props.clickHandler}>
      <img
        src="/shopping-bag.png"
        alt="shopping bag logo"
        className={styles.logo}
      />
      <p className={styles.items}>{props.shoppingCart.length}</p>
    </div>
  );
}

export default ShoppingCart;
