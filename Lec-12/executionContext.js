// var a = 10;

// function x(){
//     console.log(y);
//     console.log('Inside x function');
//     var y = 20;
// }

// x();
// console.log(a);


console.log(a);

function b(){
    c();
    var d = 200;
    function c(){
        console.log(d)
    }
}

b();
var a = 100;
