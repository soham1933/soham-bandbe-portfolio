import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/hulk-5959620_640.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/NicePng_killing-floor-2-png_2209448 (1).png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <img src={getImageUrl("about/spider.png")} alt="spider" className={styles.overlay}/>
              <h3>Frontend Developer</h3>
              <p>
                I actually started my coding journey with <strong>HTML</strong> and <strong>CSS</strong> which are very easy to learn and implement. I've made multiple projects with these languages.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/NicePng_killing-floor-2-png_2209448 (1).png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <img src={getImageUrl("about/spider.png")} alt="spider" className={styles.overlay}/>
              <h3>Backend Developer</h3>
              <p>
                I love working with data, as it has fun like making tables, creating different databases, connecting database to the appropriate GUI etc.
                I've intermideate knowledge about <strong>PHP</strong> coding language.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/NicePng_killing-floor-2-png_2209448 (1).png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <img src={getImageUrl("about/spider.png")} alt="spider" className={styles.overlay}/>
              <h3>UI Designer</h3>
              <p>
                I recently started <strong>Figma</strong> and I loved working on that. It gives me a proper approach for my website/frontend development.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
