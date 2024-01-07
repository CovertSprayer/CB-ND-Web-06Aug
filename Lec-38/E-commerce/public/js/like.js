
document.addEventListener('click', async(e)=>{
    if(e.target.classList.contains('like-btn')){
        try {
            const productId = e.target.getAttribute('product-id');

            const res = await axios({
                method:'post',
                url:`/products/${productId}/like`,
                headers: {'X-Requested-With': 'XMLHttpRequest'},
            });

            console.log(res);
        } 
        catch (error) {
            window.location.replace('/login');
        }

    }
})