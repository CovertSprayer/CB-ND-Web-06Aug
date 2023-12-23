const { productSchema } = require('../joiValidation');

module.exports.validateProduct = async (req, res, next) => {
    const { name, price, desc, image } = req.body;

    try {
        const value = await productSchema.validateAsync({ name:name, price:price, image:image, desc:desc })
        next();
    } 
    catch (error) {
        console.log(error);
        res.render('error', { err: error.details[0].message })
    }
}