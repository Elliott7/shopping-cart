import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={props.className}>
      <ul className={styles.navlinks}>
        <Link to="/">
          <li>Men</li>
        </Link>
        <Link to="/women">
          <li>Women</li>
        </Link>
        <Link to="/kids">
          <li>Kids</li>
        </Link>
        <Link to="/custom">
          <li>Custom</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
