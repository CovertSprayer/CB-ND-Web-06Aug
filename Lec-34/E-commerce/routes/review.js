// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const Product = require('../models/product');
const Review = require('../models/review');

router.post('/products/:productId/add', async (req, res) => {
    const { productId } = req.params;
    const { rating, comment } = req.body;

    const product = await Product.findById(productId);

    // const review = new Review({rating, comment});
    // review.save();

    const review = await Review.create({rating, comment})
    product.reviews.push(review);

    product.save();
    res.redirect('back');
})


module.exports = router;