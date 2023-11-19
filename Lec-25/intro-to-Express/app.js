const express = require('express');
const app = express();

const data = {
    status:200,
    products:[{
        title:'Iphone',
        price:200,
        desc:'White color, 16GB RAM, 256GB ROM'
    },{
        title:'MI',
        price:20,
        desc:'Gray color, 32GB RAM, 256GB ROM' 
    },{
        title:'Samsung',
        price:80,
        desc:'Light Peal color, 16GB RAM, 256GB ROM'
    }]
}

// console.log(app);

// app.use('/login', (req, res)=>{
//     res.send('This is LOGIN PAGE');
// })

// app.use('/', (req, res)=>{
//     res.send('<h1>This is HOME PAGE!</h1>')
// })

app.get('/login', (req, res)=>{
    res.send('This is LOGIN PAGE');
})

app.get('/', (req, res)=>{
    res.send('This is HOME PAGE!');
})

app.get('/products', (req, res)=>{
    res.send(data);
})

// app.get('/products/1', (req, res)=>{
//     let newData = data.products[1-1]; 
//     res.send(newData);
// })
// app.get('/products/2', (req, res)=>{
//     let newData = data.products[2-1]; 
//     res.send(newData);
// })
// app.get('/products/3', (req, res)=>{
//     let newData = data.products[3-1]; 
//     res.send(newData);
// })

app.get('/products/:num', (req, res)=>{
    console.log(req.params);
    const ind = req.params.num -1;
    let newData = data.products[ind]; 
    res.send(newData);
})

const PORT = 4444;
app.listen(PORT, ()=>{
    console.log('Server is up at port', PORT);
})