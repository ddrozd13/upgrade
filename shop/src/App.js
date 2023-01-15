import React, { useState } from 'react';
import Categories from './components/Categories';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from './components/Items';
import Modal from './components/Modal';

const App = () => {
  const [items, ] = useState([
    {
      id: 1,
      title: 'Кресло-качалка',
      img: 'https://vgr.by/wp-content/uploads/2022/02/myagkie-kresla-kachalki-obzor-udachnyih-modeley.-e1643802476129.jpg',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Столик журнальный',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-kx27xvMVp04_nlf3GH8-3wJ-5G6cZ1bxHZLP3NdjM9scF7CAPj2hjTrJWzb5fiR1MU&usqp=CAU',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'tables',
      price: '49.99'
    },
    {
      id: 3,
      title: 'Стул компьютерный',
      img: 'https://yams.kufar.by/api/v1/kufar-ads/images/54/5467556854.jpg?rule=list_thumbs_2x',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 4,
      title: 'Светильник',
      img: 'https://cs1.livemaster.ru/storage/0e/74/85d7b5026d660c33f144a17eb3zw--dlya-doma-i-interera-lyustra-iz-sleba.jpg',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'light',
      price: '49.99'
    },
    {
      id: 5,
      title: 'Стол кухонный',
      img: 'https://deshevaya-mebel.ru/wp-content/uploads/2019/04/kvs_photo4.jpg',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'tables',
      price: '49.99'
    },
    {
      id: 6,
      title: 'Кресло',
      img: 'https://divanby.com/sites/default/files/styles/original_image_with_watermark/public/sofas/lord_1ka-r_12.jpg?itok=mNZzpica',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 7,
      title: 'Стол',
      img: 'https://bels.by/wp-content/uploads/2019/04/Stol-Loft-1.jpg',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'tables',
      price: '49.99'
    },
    {
      id: 8,
      title: 'Стул',
      img: 'https://basket-03.wb.ru/vol406/part40610/40610228/images/big/1.jpg',
      desc: 'Lorem ipsum dolar sit amet, consectetur adipisicing',
      category: 'chairs',
      price: '49.99'
    },
  ]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [openModal, setOpenModal] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item, event) => {
    event.stopPropagation();
    setOpenModal(false)
    let isInArray = false;
    orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true;
      };
    });
    if(!isInArray){
      setOrders([...orders, item]);
    };
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const chooseCategory = (category) => {
    if(category === 'all') {
      setCurrentItems(items);
    }else {
      setCurrentItems(items.filter(el => el.category === category));
    };
  };

  const showModal = (item) => {
    setFullItem(item);
    setOpenModal(!openModal);
  };

  return (
    <div className="wrapper">
      <Header data={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items showModal={showModal} data={currentItems} onAdd={addToOrder}/>
      {openModal &&  <Modal item={fullItem} onAdd={addToOrder} openModal={showModal}/>}
      <Footer />
    </div>
  );
};

export default App;
