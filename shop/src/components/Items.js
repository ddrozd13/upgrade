import React from 'react';
import Item from './Item';

const Items = ({data, onAdd, showModal}) => {
    return (
      <main>
        {data.map((el) => (
          <Item showModal={showModal} key={el.id} item={el} onAdd={onAdd} />
        ))}
      </main>
    );
};

export default Items;
