const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../../middlewares/productMiddlewares');
const User = require('../../models/user');

router.post('/products/:productId/like', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    if(req.user.wishList.includes(productId)){
        await User.findByIdAndUpdate({_id:userId}, {$pull: {wishList:productId}});
    }
    else{
        await User.findByIdAndUpdate({_id:userId}, {$addToSet: {wishList:productId}});
    }

    res.status(200).json({
        success:true
    })
    
})

module.exports = router;