
console.log('Hello');
delay(5);
console.log('Everyone!!');


function delay(n){
    let x = new Date().getTime();
    while(x+n*1000 > new Date().getTime()){}
}
