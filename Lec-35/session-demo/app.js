const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'thisissecret',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res) => {
    res.send(req.session);
    // res.send('Working Fine!');
})

app.get('/set-session/:name', (req, res)=>{
    req.session.name = req.params.name;
    res.send(req.session.name);
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});