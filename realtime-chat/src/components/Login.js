import { Container, Grid, Box, Button } from '@mui/material';
import React, {useContext} from 'react';
import Context from '../index';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router';

const Login = () => {
  const {auth} = useContext(Context);
  const navigate = useNavigate();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(auth, provider);
    user ? navigate('/chat') : navigate('/');
  };

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
        <Grid style={{width: 400, backgroundColor: 'lightgray'}} container alignItems={'center'} direction={'column'}>
          <Box p={5}>
            <Button variant='outlined' color='inherit' onClick={login}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
