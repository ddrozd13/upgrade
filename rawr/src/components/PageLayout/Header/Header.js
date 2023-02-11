import styles from './Header.module.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {SlBasket} from 'react-icons/sl';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  const navigate  = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <div>RAWR</div>
        </div>
        <ul className={styles.navigation}>
          <li>Новинки</li>
          <li>Мужчины</li>
          <li>Женщины</li>
        </ul>
        <div className={styles.other}>
          <SlBasket  className={styles.other_basket} />
          <CgProfile className={styles.other_profile} />
        </div>
      </div>
    </div>
  )
}

export default Header;