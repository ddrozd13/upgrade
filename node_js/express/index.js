const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.get('/user/:username', (request, response) => {
  response.render('user', {username: request.params.username, hobbies: ['Football', 'Skate', 'Basketball']});
});

app.post('/check-user', (request, response) => {
  let username = request.body.username;
  if(username === ''){
    return response.redirect('/');
  } else {
    return response.redirect('/user/' + username);
  };
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on: http://localhost:${PORT}`);
});