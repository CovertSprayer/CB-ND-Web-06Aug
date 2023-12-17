const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/E-com-6Aug')
    .then(() => console.log('E-com-6Aug connected'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Working Fine!!');
})

const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');

app.use(productRoutes);
app.use(reviewRoutes);


const PORT = 8000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})