var bobombsPrice = document.getElementById('bobombsPrice').innerText;
var bobombsCaught = document.getElementById('bobombsCaught').innerText;
var bobombsTotal = bobombsPrice * bobombsCaught;
document.getElementById('bobombsTotal').innerHTML = bobombsTotal;


var cheepPrice = document.getElementById('cheepPrice').innerText;
var cheepCaught = document.getElementById('cheepCaught').innerText;
var cheepTotal = cheepPrice * cheepCaught;
document.getElementById('cheepTotal').innerHTML = cheepTotal;



var goombaPrice = document.getElementById('goombaPrice').innerText;
var goombaCaught = document.getElementById('goombaCaught').innerText;
var goombaTotal = goombaPrice * goombaCaught;
document.getElementById('goombaTotal').innerHTML = goombaTotal;


var total = bobombsTotal + cheepTotal + goombaTotal;

document.getElementById('total').innerHTML = total;