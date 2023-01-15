import React, { useState } from 'react'

const Categories = ({chooseCategory}) => {
  const [categories, ] = useState([
    {
      key:  'all',
      name: 'Всё',
    },
    {
      key:  'tables',
      name: 'Столы',
    },
    {
      key:  'chairs',
      name: 'Стулья',
    },
    {
      key:  'light',
      name: 'Светильники',
    }
  ])
  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
