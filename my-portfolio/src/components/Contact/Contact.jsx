import React from "react";
import styles from "./Contact.module.css";
import { assets } from "../../assets/assets.js";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:siddhartha.gurram@example.com">siddhartha.gurram@example.com</a></p>
        <p>Phone: <a href="tel:+911234567890">+91-1234567890</a></p>

        <a href="/resume.pdf" download className={styles.resumeButton}>
          Download My Resume
        </a>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>All rights reserved © 2025</p>
        </div>
        <div className={styles.madeWithLove}>
          <p>Made with ❤ by Siddhartha Gurram</p>
        </div>
      </div>
    </footer>
  );
};
