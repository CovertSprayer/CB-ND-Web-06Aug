const characters = ['a', 'b', 'c', 'd', 'e'];
console.log(characters);

// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);
// console.log(characters[3]);
// console.log(characters[4]);

// for(let index=0; index<=4; index++){
//     console.log(characters[index])
// }


const product = {
    title: 'Laptop',
    price: 800,
    cells: 4,
    color: 'Black',
    brand: 'Dell'
}

// ------------- Normal Loop
// for(let i=0; i<characters.length; i++){
//     console.log(characters[i]);
// }

// -------------- for of
// for(let ch of characters){
//     console.log(ch);
// }

// -------------- for in
for(let key in product){
    console.log(product[key]);
}

for(let index in characters){
    console.log(characters[index]);
}



// ---------------------
const products = [
    {title: 'Laptop',price: 800,cells: 4,color: 'Black',brand: 'Dell'},
    {title: 'TV',price: 1800,cells: 'NA',color: 'Black',brand: 'Sony'},
    {title: 'Mobile',price: 3200,cells: 6,color: 'Blue',brand: 'Redmi'},
    {title: 'Earbuds',price: 1000,cells: 2,color: 'White',brand: 'Apple'}
]

for(let product of products){
    if(product.cells <= 4){
        console.log(product);
    }
}

for(let index in products){
    if(products[index].cells <= 4){
        console.log(products[index]);
    }
}