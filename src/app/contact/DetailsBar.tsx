import React from 'react';
import styles from './contact.module.css'
import { Phone, Mail, Instagram, Facebook, LinkedIn } from '@mui/icons-material';

const DetailsBar = () => {
  return (
    <div className={styles.detailsBarWrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.textOne}>Contact Information</p>
        <p className={styles.textTwo}>Fill up the form and our team will get back to you within 24 hours</p>
      </div>

        <a className={styles.contactsWrapper} href="mailto:theadaptiveimpact@gmail.com">
          <Mail/>
          <div className={styles.contactText}>theadaptiveimpact@gmail.com</div>
        </a>

      <div className={styles.socialsWrapper}>
        {/* <a className={styles.socialIconWrapper} href="https://www.facebook.com/profile.php?id=100021937291259" target="_blank">
          <Facebook color="#fff" size={20} />
        </a> */}
        <a className={styles.socialIconWrapper} href="https://www.instagram.com/adaptiveimpact/" target="_blank">
          <Instagram />
        </a>
        {/* <a className={styles.socialIconWrapper} href="https://www.linkedin.com/in/allen-jones-b799b7171/" target="_blank">
          <LinkedIn color="#fff" size={20} />
        </a> */}
      </div>
    </div>
  );
};

export default DetailsBar;