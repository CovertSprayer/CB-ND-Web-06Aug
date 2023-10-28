const btn = document.querySelector('button');
const list = document.querySelector('.list');

function getData(url){
    fetch(url)
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            for(let item of data.products){
                let li = document.createElement('li');
                li.innerText = item.title;

                list.append(li);
            }
        })
        .catch(err=>console.log(err))
}

btn.addEventListener('click', ()=>{
    getData('https://dummyjson.com/products');
})
