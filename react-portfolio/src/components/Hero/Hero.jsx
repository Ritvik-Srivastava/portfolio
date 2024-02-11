import React from 'react';
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return(
  <section className={styles.container}>

    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Ritvik Srivastava</h1>
    <p className={styles.description}>
     I'm a web developer</p>
    <a href='mailto:ritviksrivastava90@gmail.com' className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/Ritvik Srivastava Pic.jpeg")} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
  );
};
