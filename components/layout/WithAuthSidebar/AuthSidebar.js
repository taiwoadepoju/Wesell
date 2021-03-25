import React from 'react';
import styles from './styles.module.css';

const AuthSidebar = () => (
  <div className={`${styles.halves} ${styles.lefthalf} col-sm-3`}>
    <a href="/">
      <h2 className="font-proxima pl-5 pt-4 text-white">Wesell</h2>
    </a>
    <h2 className={`${styles.maintext} text-white pl-5 pr-5 pt-5`}>Find anything, anywhere</h2>
    <p className={`${styles.subtitletext} text-white pr-3 pl-5 pt-4`}>
      Get the best deals on goods and services from
      trustworthy and verified sellers very close to you.
    </p>
    <div className={`${styles.imagesection}`}>
      <img className={`${styles.image} img-fluid mx-auto`} alt="green shirt" src="/assets/images/green-shirt-large.png" />
    </div>
  </div>
);

export default AuthSidebar;
