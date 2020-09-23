//Koiralle nimi, TUL 19
import {TextView, Button. contentView] from 'tabris';
        
//mahdolliset nimet taulukossa
  var nimet = ["HauHau", "Muisti", "Täplä", "Jekku", "Bella", "Roki", "Jymy", "Jeri"];
       
        
//painike
  new button8({text: 'Mikä koiralle nimeksi?'})
  .onSelect(() => arvonimi())
  .appendTo(contentView);

//tekstikenttä jossa valittu nimi
let naytanimi = new TextView({
  centerX: 0, top: 100,
  font: "24px"
}).appendTo(contentView);

function arvonimi() {
  nimet = shuffle(nimet); //kutsu taulukon sekoitusta
  //näytä sekoitetusta taulukosta ensimmäinen ja toinen solu
  naytanimi.text = 'Miten olisi ' + nimet[0] ' tai ' + nimet[1] + '?';
  
}

//taulukon solujen sekoitus

function shuffle (array) {
  var i = 0
  	, j = 0
  	, temp = null
  
  for (i = array.length -1; i> 0; i -=1 ) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
  }
  return array;
  
}
