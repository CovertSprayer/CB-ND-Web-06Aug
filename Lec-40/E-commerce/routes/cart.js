const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/productMiddlewares');
const User = require('../models/user');

router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalPrice = 0;
    user.cart.forEach(cartItem => {
        totalPrice += cartItem.quantity * cartItem.productId.price;
    });

    res.render('cart/index', { user, totalPrice });
})

router.post('/user/cart/:productId/add', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    const existingItem = user.cart.find((cartItem) => {
        return cartItem.productId.toString() == productId;
    })

    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        user.cart.push({ productId });
    }

    await user.save();

    req.flash('success', 'Product added to cart Successfully!!');
    res.redirect('back');
})

router.post('/user/cart/:productId/remove', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;
    
    const user = await User.findById(userId).populate('cart.productId');
    console.log(user);  

    const existingItem = user.cart.find((cartItem) => {
        return cartItem.productId._id.toString() == productId;
    })

    if(existingItem && existingItem.quantity > 1){
        existingItem.quantity--;
    }

    await user.save();

    res.redirect('back');

})


module.exports = router;