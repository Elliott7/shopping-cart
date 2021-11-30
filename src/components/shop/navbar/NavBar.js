import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={props.className}>
      <ul className={styles.navlinks}>
        <li>
          <Link to="/">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/custom">Custom</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
