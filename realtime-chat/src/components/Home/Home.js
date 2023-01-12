import React, {useContext} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import Context from '../../index.js';
import './Home.css';


const Home = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div>
      <div className='btn'>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/chat')}>Chat</button>
      </div>
    </div>
  );
};

export default Home;
