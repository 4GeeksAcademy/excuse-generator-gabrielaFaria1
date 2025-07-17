import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomWord (array){
  let randomArrayIndex = Math.floor(Math.random() * array.length)
  let randomArrayWord = array[randomArrayIndex];
  return randomArrayWord
}
let RandomWho = randomWord(who);
let RandomAction = randomWord(action);
let RandomWhat = randomWord(what);
let RandomWhen = randomWord(when);
  
document.querySelector('#excuse').innerHTML= RandomWho + " " + RandomAction + " " +RandomWhat + " "+ RandomWhen +" "
  
};

