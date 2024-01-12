// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn } = require('../middlewares/productMiddlewares');

router.post('/products/:productId/add', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const { rating, comment } = req.body;

    const product = await Product.findById(productId);
    const review = await Review.create({ rating, comment });

    const newAvgRating = ((product.avgRating * product.reviews.length) + parseInt(req.body.rating)) / (product.reviews.length + 1);
    product.avgRating = parseFloat(newAvgRating.toFixed(1));
    
    product.reviews.push(review);
    
    product.save();
    res.redirect('back');
})


module.exports = router;