const form = document.querySelector('form');
const inp = document.querySelector('input');
const list = document.querySelector('.list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const query = inp.value;
    addDataToList(query);
})

async function addDataToList(query){
    let url = `https://api.tvmaze.com/search/shows?q=${query}`;
    const res = await axios.get(url);

    list.innerText = '';
    for(let item of res.data){
        // console.log(item.show.image.medium)
        let img = document.createElement('img');
        img.setAttribute('src', item.show.image.medium);
        list.append(img);
    }
}
