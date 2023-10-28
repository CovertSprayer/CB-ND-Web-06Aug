const btn = document.querySelector('button');
const list = document.querySelector('.list');

function getData(url){
    axios.get(url)
        .then((res)=>{
            console.log(res.data);
            for(let item of res.data.products){
                let li = document.createElement('li');
                li.innerText = item.title;

                list.append(li);
            }
        })
        .catch(err=>console.log(err));
}

btn.addEventListener('click', ()=>{
    getData('https://dummyjson.com/products');
})
