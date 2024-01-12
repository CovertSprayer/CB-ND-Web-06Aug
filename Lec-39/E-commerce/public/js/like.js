
function like(){

}

document.addEventListener('click', async(e)=>{
    const btn = e.target;
    if(btn.classList.contains('like-btn')){
        try {
            const productId = btn.getAttribute('product-id');

            const res = await axios({
                method:'post',
                url:`/products/${productId}/like`,
                headers: {'X-Requested-With': 'XMLHttpRequest'},
            });

            if(btn.classList.contains('fa-regular')){
                btn.classList.remove('fa-regular');
                btn.classList.add('fa-solid');
            }
            else if(btn.classList.contains('fa-solid')){
                btn.classList.remove('fa-solid');
                btn.classList.add('fa-regular');
            }
        } 
        catch (error) {
            window.location.replace('/login');
        }

    }
})