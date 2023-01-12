import React, {useContext} from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import Context from '../index.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);

  const signOut = () => {
    auth.signOut();
    navigate('/');
  }

  return (
    <AppBar position="static" color={'secondary'}>
      <Toolbar variant="dense">
        <Grid container justifyContent={'flex-end'}>
          {user &&
            <Grid container justifyContent={'flex-end'}>
              <AccountCircleIcon style={{marginRight: 20, cursor: 'pointer'}}/>
              <Button variant={'outlined'} color='inherit' onClick={signOut}>Выйти</Button>
            </Grid> ||
            <Button variant={'outlined'} color='inherit' onClick={() => navigate('/login')}>Логин</Button>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
