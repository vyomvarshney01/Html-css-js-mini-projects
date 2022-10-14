const person = document.querySelector('.person')
const quoteArea = document.querySelector('.quote')
const btn = document.querySelector('#new-quote')

const quotes = [
   { quote : '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    author : '― Bernard M. Baruch'
   },{ 
       quote : '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
       author : '― Dr. Seuss'
   },{
    quote : ' “In three words I can sum up everything I\'ve learned about life: it goes on.”',
    author : '― Robert Frost'
   },{
    quote : '“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”',
    author : '― J.K. Rowling'
   },{
    quote : '“Don\'t walk in front of me… I may not followDon\'t walk behind me… I may not leadWalk beside me… just be my friend”',
    author : '― Albert Camus'
   },{
    quote : '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
    author : '― C.S. Lewis, The Four Loves'
   }
]

btn.addEventListener('click', function () {
   let random = Math.floor(Math.random() * quotes.length)

   quoteArea.innerText = quotes[random].quote
   person.innerText = quotes[random].author

})