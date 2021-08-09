var quotes = [
    'The way to get started is to quit talking and begin doing.-walt disney',
    'the pessimist sees difficulty in every opportunity. the optimist sees opportunity in every difficulty.-Winston Churchil',
    'don\'t let yesterday take too much of today',
    'you learn more from failure than from success.Don\'t let it stop you. Failure builds charachter.-unknown',
    'It\'s  not whether you get knocked down, its whether you get up.-vince lombardi',
    'if you are working on something that you realy care about, you don\'t have to be pushed, the vision pulls you.-steve jobs',
    'people who are crazy enough to think they can change the world, are the ones who do. - rob siltanen',
    'failure will never overtake me if my determination to succeed is strong enough.-Og mandino',
    'Entrepreneurs are great at dealing with uncertainty and also very good at minimazing risk.That\'s the classic entreprenaur.-Mohnish Pabrai',
    'we may encounter many defeats but we must not be defeated. -Maya Angelou'

]


function newQuote (){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
    document.getElementById("quoteDisplay").style.fontFamily = "monospace";
    document.getElementById("quoteDisplay").style.color = "Dodgerblue";


}


