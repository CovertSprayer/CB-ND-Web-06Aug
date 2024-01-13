const buyBtn = document.querySelector('#buy-btn');

buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = document.querySelector('h5.card-text').innerText.split(' ').pop();
    makePayment(amount);
})

async function makePayment(amount) {
    const res = await axios({
        method: 'post',
        url: '/order',
        data: { amount },
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    console.log(res.data);

    options = {
        "key": "rzp_test_8wvQsvdLHaDloc", // Enter the Key ID generated from the Dashboard
        "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Test Name",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:8000/payment-verify",
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzpay = new Razorpay(options)
    rzpay.open();
}