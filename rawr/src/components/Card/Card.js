import React from 'react';
import styles from './Card.module.scss';

const Card = ({item}) => {
  return (
    <div className={styles.container}>
      <img src={item.img} alt='' className={styles.container_img}/>
      <p className={styles.container_model}>{item.model}</p>
      <b className={styles.container_price}>{item.price}$</b>
    </div>
  );
};

export default Card;
