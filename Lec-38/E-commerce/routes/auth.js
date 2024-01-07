const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
    // console.log(req.session);
    res.render('auth/login');
})

router.get('/register', (req, res) => {
    res.render('auth/register');
})

router.post('/register', async (req, res) => {
    const { username, email, role, password } = req.body;
    const newUser = new User({username, email, role});

    await User.register(newUser, password);

    req.flash('success', 'User registered successfully!!');
    res.redirect('/login');
})

router.post('/login', 
            passport.authenticate('local', {failureRedirect: '/login'}),
            (req, res)=>{
                req.flash('success', 'Logged in Successfully!');
                res.redirect('/products');
            })

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', 'Logged out successfully!');
        res.redirect('/products');
    });
});

module.exports = router;