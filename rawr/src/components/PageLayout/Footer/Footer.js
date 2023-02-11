import styles from './Footer.module.scss';
import React from 'react'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pravo}>Все права защищены &copy;</div>
      <div className={styles.production}>&#169; Production by @ddrozd13</div>
    </div>
  )
}

export default Footer;