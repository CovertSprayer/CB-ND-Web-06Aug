const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisissomesecret'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
})

app.get('/set-cookie', (req, res) => {
    res.cookie('mode', 'dark');
    res.cookie('username', 'rahul');
    res.send('cookie has been set successfully!');
})

app.get('/showCookies', (req, res) => {
    // console.log(req.cookies);
    res.send(`Cookies ${req.cookies.mode} ${req.cookies.username}`);
})

// app.get('/store', (req, res)=>{
//     res.cookie('discount', '2000');
//     res.send('Discount awailed!');
// })

// app.get('/buy-shoes', (req, res)=>{
//     const totalPrice = 10000;
//     let discountPrice = totalPrice;
//     if(req.cookies.discount){
//         discountPrice -= parseInt(req.cookies.discount);
//         return res.send(`Your final dicount price: ${discountPrice}`)
//     }
//     res.send(`Your final dicount price: ${discountPrice}`)    
// })

// ------------------ signed cookie
app.get('/store', (req, res) => {
    res.cookie('discount', '2000', { signed: true });
    res.send('Discount awailed!');
})

app.get('/buy-shoes', (req, res) => {
    console.log(req.signedCookies);
    const { discount } = req.signedCookies;
    const totalPrice = 10000;
    let discountPrice = totalPrice;
    if (discount) {
        discountPrice -= parseInt(discount);
        return res.send(`Your final dicount price: ${discountPrice}`)
    }
    res.send(`Your final dicount price: ${discountPrice}`)
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});