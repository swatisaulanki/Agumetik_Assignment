import React from "react";
import styles from "./Shome.module.css";
import Footers from "./Footers";
import Navbar from "./Navbar";

const Shome = () => {
  return (
    <>
      <Navbar />

      <div className={styles.parent}>
        <div className={styles.homemain}>
          <div>
            <h2>Big Data and Software Development</h2>
          </div>

          <div>
            <p>Morbi sagittis neque, facilisis magna.</p>
            <p>pellentesque ultricies bibendum morbi nec aenean feugiat. Ut</p>
            <p>ipsum, interdum aliquam nisl lectus at</p>
          </div>

          <div className={styles.mainimg}>
            <input placeholder="Input your email" />
            <button>Get Started</button>
          </div>
        </div>

        <div className={styles.imgp}>
          <img src="https://img.freepik.com/free-vector/isometric-smart-city-background_52683-9056.jpg?w=360" />
        </div>
      </div>

      <div className={styles.compo}>
        <div className={styles.mainc}>
          <div className={styles.mincs}>
            <h2>What is climp?</h2>

            <p>
              This week, we're excited to be featuring ConalSathi.Conal has been
              building the computer brains that dreve the converstions that the
              infinitus digital assistant has. From rule based systems to
              self-learning models, Conak has been pulling out all stops to make
              sure our customers are getting the most out of their infinitus
              experience.
            </p>

            <p>
              Julian is a two time entrepreneur and thrives in early-stage
              companies that are figuring things out. He has also previously
              worked at Google and YouTube where he led the redesign.
            </p>

            <div className={styles.view}>
              <button>View Detail</button>
            </div>
          </div>
          <div className={styles.secparas}>
            <div className={styles.cons}>
              <p>Get your time energy back</p>

              <p>
                No need to frantically set up short term call-centers during
                unexpected spikes, or sit on unused capacity only pay for the
                calls you need
              </p>
            </div>

            <div className={styles.cons2}>
              <h2>Skip the worry while staying informed</h2>
              <p>
                Infinitus' HIPAA compliant platform helps you
                loopFillGroupWithBlank better oversight of where everything
                stands so you never have to wonder.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainpb}>
        <div className={styles.mainb}>
          <div>
            <img src="https://images.ctfassets.net/19dvw6heztyg/1Kh1hVqbZSsSL4HM5TrJX3/6e19c050bd007e99f915e5034b87ebb6/seo-earn-more-as-developer?w=1200&h=600&fit=fill&q=75&fm=jpg" />
          </div>
          <div className={styles.maing}>
            <h2>Automate your business. Deepen your human interactions.</h2>
            <p>
              The climp.co platform can handle volumes of tedious.
              time-consuming phone calls with super-human accuracy
            </p>

            <div className={styles.buts}>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <Footers />
      </div>
    </>
  );
};

export default Shome;
