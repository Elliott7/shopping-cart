import styles from "./ShoppingCart.module.css";
function ShoppingCart(props) {
  return (
    <div className={styles.cont}>
      <img
        src="/shopping-bag.png"
        alt="shopping bag logo"
        className={styles.logo}
      />
      <p className={styles.items}>0</p>
    </div>
  );
}

export default ShoppingCart;
