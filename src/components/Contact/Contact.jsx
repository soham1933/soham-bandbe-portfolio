import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <img src={getImageUrl("contact/th.png")} alt="Overlay Image" className={styles.overlay}/>
        <img src={getImageUrl("contact/web2.png")} alt="Overlay Image" className={styles.overlay2}/>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sohambandbe1832@gmail.com">E-mail</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/soham-bandbe-838966228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/soham1933/soham-portfolio">github.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/shield.png")} alt="Github icon" />
          <a href="https://sohambandbeportfolio.netlify.app/">My Portfolio</a>
        </li>
      </ul>
    </footer>
  );
};
