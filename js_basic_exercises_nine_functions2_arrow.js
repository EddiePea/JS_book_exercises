/* NB When using arrow syntax, if your function body only contains one statement,
even if that statement spreads over multiple lines, you don't need to use the return 
keyword or curley braces around the function body. 

*/

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));

/* NB The object returned has parentheses around it. That is because JS 
does not interpret a statement starting with a brace is an object literal but
as a block statement. So you need to force JS to treat the statement
as an object literal by making sure that the statement does not start with 
a brace. 

You could also use new Object too. 

*/

let initGame = () => ({
    level: 1,
    score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);