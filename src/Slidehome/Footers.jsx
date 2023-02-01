import React from "react";
import styles from "./Footers.module.css";
const footers = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.first}>
          <div className={styles.mainfi}>
            <div className={styles.imgs}>
              <img src="https://brandlogos.net/wp-content/uploads/2020/09/dribbble-logo.png" />

              <p>Climp.co</p>
            </div>

            <div className={styles.para}>
              <p>Morbi sagittis neque, facilisis magna.</p>
              <p>
                pellentesque ultricies bibendum morbi nec aenean feugiat. Ut
              </p>
              <p>ipsum, interdum aliquam nisl lectus at</p>
            </div>
          </div>

          <div className={styles.second}>
            <div>
              <h1>Subscribe to our newslater</h1>
            </div>
            <div>
              <div className={styles.flessub}>
                <div>
                  <p>SOFTWARE</p>
                  <p>HARDWARE</p>
                  <p>COMPANY</p>
                  <p>PROGRAMS</p>
                </div>

                <div className={styles.secpara}>
                  <p>ABOUT US</p>
                  <p>HOW IT WORKS</p>
                  <p>CONTACT</p>
                  <p>BLOG</p>
                </div>
              </div>
            </div>
          </div>

          {/* third */}

          <div className={styles.third}>
            <div>
              <input placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
            <div>
              <div className={styles.flesssub}>
                <div>
                  <p>TWITTER</p>
                  <p>FACEBOOK</p>
                  <p>INSTAGRAM</p>
                  <p>LINKEDIN</p>
                </div>

                <div className={styles.seopara}>
                  <h2>OUR OFFICE</h2>
                  <p>Mars Colony Complex</p>
                  <p>Sol-air 290 345 Av</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>All Right Reserved 2021-Climp.co</p>
      </div>
    </>
  );
};

export default footers;
