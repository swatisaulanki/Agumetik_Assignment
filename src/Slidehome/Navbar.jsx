import React from "react";
import styles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.imgcontain}>
        <div>
          <img src="https://brandlogos.net/wp-content/uploads/2020/09/dribbble-logo.png" />
        </div>
        <div>Climp.co</div>
      </div>

      <div className={styles.btncontain}>
        <div>Business</div>
        <div>How it Works</div>
        <div>About Us</div>
        <div className={styles.firstbtn}>Pricing</div>
        <div className={styles.secondbtn}>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
