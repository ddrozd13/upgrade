import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, {useContext, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {collection, serverTimestamp, setDoc, addDoc} from 'firebase/firestore'
import Context from '../index.js';
import Loader from './Loader.js';

const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
    collection(firestore, 'messages')
  );

  const sendMessage = async () => {
    try{
      await addDoc(collection(firestore, 'messages'), {
        uid: user.providerId,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp()
      })
    } catch (e) {
      console.log(e);;
    }
    setValue('');
  }


  if(loading){
    return <Loader />
  }

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50, marginTop: 30}} justifyContent='center'>
        <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflow: 'auto'}}>
          {messages && messages.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1) && messages.map(message => (
            <div
              key={message.uid+message.text+message.createdAt+'key'}
              style={{
                margin: 10,
                border: user.uid === message.uid ? '2px dashed red' : '2px solid green',
                marginLeft: user.uid === message.uid ? '10px' : 'auto',
                width: 'fit-content',
                padding: 5
              }}
            >
              <Grid container >
                <Avatar src={message.photoURL}/>
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid container direction='column' alignItems={'flex-end'} style={{width: '80%'}}>
          <TextField variant='outlined' fullWidth maxRows={2} value={value} onChange={e => setValue(e.target.value)}/>
          <Button variant='outlined' onClick={sendMessage}>Отправить</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
