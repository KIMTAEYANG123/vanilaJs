const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author : "Arnold Schwarzenegger",
    },{
        quote: "It is kind of fun to do the impossible",
        author : "Walt Disney",
    }
    ,{
        quote: "It takes a lot of courage to go into the unknown.",
        author : "Usain Bolt",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author : "Robert H. Schuller",
    },
]

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');

// 새로고침 될 떄마다 랜덤한 글 가져오기 
const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;