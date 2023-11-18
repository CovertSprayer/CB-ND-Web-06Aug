const fs = require('fs');
const path = require('path');

let data = 'Hello! This is some data';
// let loc = __dirname + 'data.txt';

let loc = path.join(__dirname, 'data', 'file.csv');

// fs.writeFile(loc, data, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Data written successfully!');
// });

fs.readFile(loc, {encoding:'utf-8'},(data, err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})


