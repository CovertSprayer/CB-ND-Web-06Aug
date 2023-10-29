
const btn = document.querySelector('button');
const list = document.querySelector('.list');
const xhr = new XMLHttpRequest();

xhr.onerror = function(err){
    console.log(err);
}

xhr.onload = function(res){
    const data = JSON.parse(res.target.response);
    console.log(data);
    for(let item of data.products){
        const li = document.createElement('li');
        li.innerText = item.brand;
        list.append(li);
    }

}

btn.addEventListener('click', ()=>{
    xhr.open('GET', 'https://dummyjson.com/products');
    xhr.send();
})