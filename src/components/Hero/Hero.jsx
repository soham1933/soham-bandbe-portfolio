import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { useDispatch } from 'react-redux';
import { incrementVisitorCount } from '../../redux/visitorSlice';
export const Hero = () => {
  const dispatch = useDispatch();
  const handleLinkClick = () =>{
    dispatch(incrementVisitorCount());
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Soham</h1>
        <p className={styles.description}>
          I'm an IT student learning in <strong>Vidyalankar Polytechnic.</strong> I love coding with different languages.
          Whenever I get bored I usually watch YouTube videos of <strong>Harsh Beniwal</strong>, <strong>BB Ki Vines</strong>, etc.
        </p>
        <Link to="/signup" className={styles.contactBtn} onClick={handleLinkClick}>Contact me</Link>
      </div>
      <img src={getImageUrl("hero/icons8-iron-man-500.png")} alt='hero image' className={styles.heroImg} />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
};
