const quotes = [
  {
    quote: "A brave man dies once,but a coward dies a thousand times.",
    author: "William Shakespeare",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "Forget injuries, never forget kindnesses.",
    author: "Confucius",
  },
  {
    quote: "Though I am not naturally honest, I am so sometimes by chance.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Be civil to all; sociable to many; familiar with few; friend to one; enemy to none.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Food is the most primitive form of comfort.",
    author: "Sheila Graham",
  },
  {
    quote: "In silence man can most readily preserve his integrity.",
    author: "Meister Eckhart",
  },
  {
    quote: "I never think of the future - it comes soon enough.",
    author: "Albert Einstein",
  },
  {
    quote: "When love is in excess it brings a man no honor nor worthiness.",
    author: "Euripides",
  },
  {
    quote:
      "Not a shred of evidence exists in favor of the idea that life is serious.",
    author: "Brendan Gill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
