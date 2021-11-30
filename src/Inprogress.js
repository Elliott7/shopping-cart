import styles from "./inprogress.module.css";
import NavBar from "./components/shop/navbar/NavBar";

function Inprogress() {
  return (
    <div className={styles.homepage}>
      <div className={styles.bgc}> </div>
      <NavBar className={styles.navbar} />
      <p className={styles.cta}>Area currently under construction</p>
    </div>
  );
}

export default Inprogress;
