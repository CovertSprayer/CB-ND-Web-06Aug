const colors = require('colors');
const figlet = require('figlet');

console.log('Hello World'.green);
console.log('JavaScript'.red);
console.log('Random Text'.rainbow);

figlet('Super Mario', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.rainbow);
})
