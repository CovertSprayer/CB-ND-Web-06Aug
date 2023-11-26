const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.listen(4444, ()=>{
    console.log('Server is up at port', 4444);
})