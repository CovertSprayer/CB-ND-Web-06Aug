const express = require('express');
const app = express();
require('./db/connections');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

const quoteAPI = require('./routes/APIs/quote');
app.use('/quotes', quoteAPI);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});