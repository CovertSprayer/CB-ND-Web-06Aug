
// function outerFun(){
//     let money = 150;
//     function innerFun(){
//         money++;
//         console.log(money);
//     }
//     return innerFun;
// }
// let fun1 = outerFun();
// let fun2 = outerFun();
// fun1();
// fun1();
// fun2();
// fun2();
// fun1();


// --------------- adv Closure

function outerFun(){
    let money = 150;
    function innerFun(){
        money++;
        let a = 10;
        function innerMostFun(){
            money++;
            a++;
            console.log(money, a);
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun = outerFun();
let fun1 = fun();
let fun2 = fun();
fun1();
fun1();
fun2();
fun2();
fun1();

