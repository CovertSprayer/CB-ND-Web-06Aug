const Quote = require('../models/quote');

module.exports.getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find({});
        res.status(200).json({
            success: true,
            quotes
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            msg:'server error!'
        })
    }
}

module.exports.getQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await Quote.findById(id);
        res.status(200).json({
            success:true,
            quote
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'server error!'
        })
    }
}

module.exports.createQuote = async (req, res)=>{
    try {
        const {author, text, photo} = req.body;
        await Quote.create({author, text, photo});
        res.status(201).json({
            success:true,
            msg:'Quote created successfully'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'server error!'
        })
    }
}

module.exports.deleteQuote = async (req, res)=>{
    try {
        const {id} = req.params;
        await Quote.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            msg:'Quote deleted successfully!'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'Server Error'
        })
    }
}

module.exports.updateQuote = async (req, res)=>{
    try {
        const {id} = req.params;
        const {author, text, photo} = req.body;

        const existingQuote = await Quote.findById(id);

        if(author) existingQuote.author = author;
        if(text) existingQuote.text = text;
        if(photo) existingQuote.photo = photo;

        await existingQuote.save();

        res.status(200).json({
            success:true,
            msg:'Quote updated successfully!'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'Server Error'
        })
    }
}