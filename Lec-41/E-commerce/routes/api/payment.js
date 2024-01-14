const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const Order = require('../../models/order');
const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils')

const { KEY_ID, KEY_SECRET } = process.env;

router.post('/order', async (req, res) => {
    const instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })
    const { amount } = req.body;

    const options = {
        amount: amount * 100 * 83,  // amount in the smallest currency unit
        currency: "INR",
    };

    instance.orders.create(options, async function (err, order) {
        await Order.create({
            _id: order.id,
            user: req.user,
            amount: order.amount
        })

        res.status(201).json({
            success: true,
            order
        })
    });
})

router.post('/payment-verify', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const isValid = validatePaymentVerification({
        "order_id": razorpay_order_id,
        "payment_id": razorpay_payment_id
    }, razorpay_signature, KEY_SECRET);

    if (!isValid) {
        return res.json({
            msg: 'Verification Failed'
        })
    }

    const order = await Order.findById(razorpay_order_id);
    order.paymentStatus = true;
    order.save();

    res.redirect('/products');
})


module.exports = router;
