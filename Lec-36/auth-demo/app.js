const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo-6aug')
    .then(() => console.log('DB connected!'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'this_is_secret',
    resave: false,
    saveUninitialized: true,
}))

function isValid(req, res, next){
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.get('/', isValid, (req, res) => {
    // console.log(req.session);
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        // res.send('Username is already taken!');
        return res.redirect('/register');
    }

    await User.create({ username, password, email });
    res.redirect('/login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({username});
    
    if(user && user.password === password){
        req.session.user_id = user._id;
        return res.redirect('/');
    }

    res.redirect('/login');

})

app.post('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
})


const port = 8000;
app.listen(port, () => {
    console.log('Server is listening at port', port);
})