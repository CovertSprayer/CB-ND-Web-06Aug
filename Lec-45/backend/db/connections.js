const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quoteDB-6Aug')
    .then(()=> console.log('quoteDB-6Aug connected'))
    .catch(err => console.log(err));