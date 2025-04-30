import React from 'react';
import styles from './contact.module.css';

const SideInput = () => {
  return (
    <form className={styles.inputSideWrapper}>
      <div className={styles.inputWrapper}>
        <p>Name</p>
        <input className={styles.input} type="text" placeholder="Allen Jones" />
      </div>
      <div className={styles.inputWrapper}>
        <p>Email</p>
        <input className={styles.input} type="email" placeholder="aljay126@gmail.com" />
      </div>
      <div className={styles.inputWrapper}>
        <p>Phone</p>
        <input className={styles.input} type="number" placeholder="+233546227893" />
      </div>
      <div className={styles.inputWrapper}>
        <p>Message</p>
        <textarea className={styles.messageInput} placeholder="Write your message" />
      </div>
      <input className={styles.messageInput} type="submit" value="Send Message" />
    </form>
  );
};

export default SideInput;