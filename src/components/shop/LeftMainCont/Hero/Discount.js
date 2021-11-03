import styles from "./Discount.module.css";

function Discount(props) {
  return (
    <div className={` ${props.className}`}>
      <p className={styles.discount}>{props.children}</p>
      <hr />
      <p>SAVE UP TO</p>
    </div>
  );
}

export default Discount;
