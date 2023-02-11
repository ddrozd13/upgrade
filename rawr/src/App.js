import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CardList from './components/CardList/CardList';
import Home from './components/HomePage/Home';

const AppRoutes = () => {
  const items = [
    {
      id: 0,
      price: 49.99,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 1,
      price: 49,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 2,
      price: 55,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 3,
      price: 49.99,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 4,
      price: 108,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 5,
      price: 218,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 0,
      price: 315,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
    {
      id: 0,
      price: 488,
      type: 't-short',
      color: 'grey',
      img: 'https://rwr.by/wp-content/uploads/2022/08/1-384.01-01.1V..jpg',
      model: 'Майка спортивная'
    },
  ]
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clothing' element={<CardList data={items} />}/>
      <Route />
    </Routes>
  );
};

export default AppRoutes;
