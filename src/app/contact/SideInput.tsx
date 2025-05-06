'use client'
import React, { useState } from 'react';
import styles from './contact.module.css';

const SideInput = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e: any) => {
    setPhone(e.target.value);
  };
  const messageHandler = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xanookeg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
  
    if (response.ok) {
      alert('Form Submitted');
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <form className={styles.inputSideWrapper}>
      <div className={styles.inputWrapper}>
        <p>Name</p>
        <input className={styles.input} type="text" placeholder="First Last" onChange={nameHandler}/>
      </div>
      <div className={styles.inputWrapper}>
        <p>Email</p>
        <input className={styles.input} type="email" placeholder="email@email.com" onChange={emailHandler}/>
      </div>
      <div className={styles.inputWrapper}>
        <p>Phone</p>
        <input className={styles.input} type="number" placeholder="+1(123) 456-789" onChange={phoneHandler}/>
      </div>
      <div className={styles.inputWrapper}>
        <p>Message</p>
        <textarea className={styles.messageInput} placeholder="Write your message" onChange={messageHandler}/>
      </div>
      <input className={styles.messageInput} type="submit" onClick={handleSubmit} value="Send Message" />
    </form>
  );
};

export default SideInput;