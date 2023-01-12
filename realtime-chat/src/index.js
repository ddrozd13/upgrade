import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID
  }
);

const Context = createContext(null)
const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      app,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

export default Context;
