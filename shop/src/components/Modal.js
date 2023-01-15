import React from 'react'

const Modal = ({item, onAdd, openModal}) => {
  return (
    <div className='full-item' onClick={() => openModal(item)}>
      <div className=''>
        <img src={item.img} alt={item.title}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-cart' onClick={(event) => onAdd(item, event)}>+</div>
      </div>
    </div>
  );
};

export default Modal;
