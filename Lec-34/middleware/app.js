const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('working fine!!');
})

function verify(req, res, next){
    const { password } = req.params;
    if(password == '4321') next();
    else res.send('Wrong Password!!');
}

app.get('/secret/:password',verify, (req, res) => {
    const secret = 'ABCD12XYZ';
    res.send(`This is the secret!! ${secret}`)
})

app.listen(4444, () => {
    console.log('Server started at port', 4444);
})