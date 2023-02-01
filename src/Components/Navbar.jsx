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
        <div>Inspiration</div>
        <div>Find Work</div>
        <div>Learn Design</div>
        <div>Go Pro</div>
        <div>Hire Designers</div>
      </div>

      <div className={styles.btncontain}>
        <div>
          {/* <input className={styles.inputs}/> */}
          <CiSearch className={styles.inputs} />
        </div>
        <div className={styles.firstbtn}>
          <button>Sign in</button>
        </div>
        <div className={styles.secondbtn}>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
