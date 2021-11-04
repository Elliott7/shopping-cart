import styles from "./Discount.module.css";

function Discount(props) {
  return (
    <div className={` ${props.className}`}>
      <p className={styles.discount}>{props.children}</p>
      <hr />
      <p className={styles.discountText}>SAVE UP TO</p>
    </div>
  );
}

export default Discount;
