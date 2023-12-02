const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded()); // ---------> for form data
// app.use(express.static()) -------> for json data

let users = [];

app.get('/', (req, res)=>{
    // res.send('Working Fine!');
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render('home')
})

app.get('/signup', (req, res)=>{
    res.render('signup');
})

app.post('/signup', (req, res)=>{
    const {username, email, password} = req.body;
    users.push({username, email, password});

    // res.send('Made a successfull Req');
    res.redirect('/signup');
})

app.get('/users', (req, res)=>{
    res.send(users);
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log('Server is up at port', PORT);
})