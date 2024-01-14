require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const MongoStore = require('connect-mongo');
const db_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/E-com-6Aug'

mongoose.connect(db_URL)
    .then(() => console.log('E-com-6Aug connected'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(session({
    store: MongoStore.create({
        mongoUrl: db_URL,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    if (req.user)
        res.locals.cartLen = req.user.cart.length;
    next();
})

app.get('/', (req, res) => {
    res.render('home')
})

// --------------------- routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

// ----------------------- APIs
const likeAPI = require('./routes/api/like');
const paymentAPI = require('./routes/api/payment');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(likeAPI);
app.use(cartRoutes);
app.use(paymentAPI);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})