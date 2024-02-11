import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact' >
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.link}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}
                alt='Email icon'  />
                <a href='ritviksrivastava90@gmail.com'>myemail</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}
                alt='LinkedIn icon'  />
                <a href='https://www.linkedin.com/in/ritvik-srivastava1/'>linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")}
                alt='Github icon'  />
                <a href='https://github.com/Ritvik-Srivastava'>mygithub</a>
            </li>
        </ul>
    </footer>
   
  )
}
