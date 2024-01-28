const express = require('express');
const router = express.Router();
const {getAllQuotes, getQuote, createQuote, deleteQuote, updateQuote} = require('../../controllers/quote');

router.get('/', getAllQuotes);
router.get('/:id', getQuote);
router.post('/', createQuote);
router.delete('/:id', deleteQuote);
router.put('/:id/edit', updateQuote);

module.exports = router;