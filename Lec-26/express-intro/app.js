const express = require('express');
const app = express();
const movieData = require('./data');

app.get('/', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // console.log(res);
    res.send('HOME PAGE');
})

app.get('/cat', (req, res) => {
    res.send('Meowww!!')
})

app.get('/dog', (req, res) => {
    res.send('Woof Woof!!');
})

app.get('/users/friends', (req, res) => {
    res.send(['Abhinav', 'Abhishek']);
})

// ----------------- query params
app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(`Hello ${req.query.name}`);
})

// --------------------- path params
app.get('/users/:username/:password', (req, res) => {
    // const userPassword = req.params.password;
    const { password } = req.params;

    if (password === 'abcd') {
        return res.send('Valid User!!');
    }
    res.send('Not a valid user!');
})

app.get('/data/:rating', (req, res) => {
    const { rating } = req.params;
    let newData = movieData.filter((movie)=>{
        return movie.rating == rating;
    });
    res.send(newData);
})

app.get('*', (req, res) => {
    res.send('Sorry, This page is not available!!');
})



const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
});
