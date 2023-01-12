import './App.css';
import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Chat from './components/Chat';
import Login from './components/Login';
import Context from './index.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader';


const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
