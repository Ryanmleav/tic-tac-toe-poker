const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCards(){
  const card = document.getElementById(idInput.value);
  console.log(card)
  card.style.color = colorInput.value;
}

function resetCards(){
  const cards = document.querySelectorAll('section')
  for(let i=0; i < cards.length; i++){
    cards[i].style.color = 'gray'
 }
}
