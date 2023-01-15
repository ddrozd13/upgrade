import React from 'react'

const Item = ({item, onAdd, showModal}) => {
  return (
    <div key={item.id} className='item' onClick={() => showModal(item)}>
      <img src={item.img} alt={item.title}/>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className='add-to-cart' onClick={(event) => onAdd(item, event)}>+</div>
    </div>
  );
};

export default Item;
