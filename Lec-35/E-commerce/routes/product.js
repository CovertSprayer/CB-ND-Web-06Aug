const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { validateProduct } = require('../middlewares/validation')

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

router.get('/product/new', (req, res) => {
    res.render('products/new');
})

router.post('/products', validateProduct, async (req, res) => {
    try {
        const { name, price, image, desc } = req.body;
        await Product.create({ name, price, image, desc });

        req.flash('success', 'Product created successfully!');
        res.redirect('/products');
    }
    catch (err) {
        res.render('error', { err: err._message });
    }
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('products/show', { product });
})

router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, price, desc } = req.body;
    await Product.findByIdAndUpdate(id, { name, image, price, desc });
    
    req.flash('success', 'Product updated successfully!');
    res.redirect('/products');
})

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    //homework
    await Product.findByIdAndDelete(id);

    res.redirect('/products');
})

module.exports = router;