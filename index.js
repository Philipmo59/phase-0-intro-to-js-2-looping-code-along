let names = ["Guadalupe", "Ollie", "Aki"];


function writeCards(names) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return cards;
};

function countDown(){
  let i = 11
  let counter = 0
  while (counter < 11) {
    console.log(i-=1)
    counter += 1
  }
}