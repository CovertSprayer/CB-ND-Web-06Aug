const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Product = require('./models/product');
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

// ------------------- product routes
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

app.get('/product/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const { name, price, image, desc } = req.body;
    await Product.create({ name, price, image, desc });

    res.redirect('/products');
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.redirect('back');
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})