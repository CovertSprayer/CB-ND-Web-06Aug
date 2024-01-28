const Quote = require('./models/quote');
require('./db/connections');

const dummyData = [
    {
        "author": "Steve Jobs",
        "text": "The only way to do great work is to love what you do."
    },
    {
        "author": "Robert Frost",
        "text": "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
        "author": "Franklin D. Roosevelt",
        "text": "The only limit to our realization of tomorrow will be our doubts of today."
    },
    {
        "author": "Winston Churchill",
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        "author": "Dalai Lama",
        "text": "The purpose of our lives is to be happy."
    },
    {
        "author": "Wayne Gretzky",
        "text": "You miss 100% of the shots you don't take."
    },
    {
        "author": "Nelson Mandela",
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        "author": "Franklin D. Roosevelt",
        "text": "The only thing we have to fear is fear itself."
    },
    {
        "author": "Peter Drucker",
        "text": "The best way to predict the future is to create it."
    },
    {
        "author": "Albert Einstein",
        "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    }
]

async function seed(){
    await Quote.deleteMany({});
    await Quote.insertMany(dummyData);
    console.log('DB seeded');
}

seed();