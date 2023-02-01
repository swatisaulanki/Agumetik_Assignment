import React from "react";
import styles from "./Home.module.css";
import Homecarousel from "./HomeCarousel";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className={styles.mainhead}>
        <div className={styles.Homecontain}>
          <div className={styles.images}>
            <div>
              <img src="https://cdn.dribbble.com/users/1756963/avatars/small/08c959390a6ee4be14d71da34d8a4162.png?1672890349" />
            </div>
            <div className={styles.climp}>
              Climp-Landing Page Exploration
              <p>Wildan 👋 for Vektora •Follow •Hire us</p>
            </div>
          </div>
          <div className={styles.save}>
            <div className={styles.btn}>
              <button>Save</button>
            </div>

            <div className={styles.btn1}>
              <button>Like</button>
            </div>
          </div>

          {/* head */}
        </div>
        <Homecarousel />
      </div>
      <div className={styles.Hidribble}>
        <p>Hi Dribbblers🏀</p>

        <p>
          This time I explored a Landing Page design with an isometric
          illustration. This website is called climpo.co! Hope you like it ❤️
          cheers for checking out.
        </p>
        <p>Isometric by Virgil</p>

        <h3>We are available for new projects</h3>
        <p>📭 Email: hello@vektora.studio</p>
        <p>🎯 Skype: Keep in touch</p>
        <p>😀 Instagram: Vektora.studio</p>
      </div>
      <div>
        <div className={styles.vek}>
          <img src="https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416" />
        </div>
        <div className={styles.vekh}>
          <h3>Vektora</h3>
        </div>
        <div className={styles.vekhp}>
          <p>Solving Problems with Unique and Creative Design</p>
        </div>
        <div className={styles.hire}>
          <button>Hire us</button>
        </div>
      </div>

      <div className={styles.Main}>
        <h3>More by Vektora</h3>
        <div className={styles.vekimg}>
          <div>
            <img src="https://cdn.dribbble.com/userupload/3510500/file/original-1f224ddd698dcd6f6baccfac1dd3a2ab.jpg?compress=1&resize=320x240&vertical=top" />
          </div>

          <div>
            <img src="https://cdn.dribbble.com/userupload/3510500/file/original-1f224ddd698dcd6f6baccfac1dd3a2ab.jpg?compress=1&resize=320x240&vertical=top" />
          </div>

          <div>
            <img src="https://cdn.dribbble.com/userupload/3510500/file/original-1f224ddd698dcd6f6baccfac1dd3a2ab.jpg?compress=1&resize=320x240&vertical=top" />
          </div>

          <div>
            <img src="https://cdn.dribbble.com/userupload/3510500/file/original-1f224ddd698dcd6f6baccfac1dd3a2ab.jpg?compress=1&resize=320x240&vertical=top" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
