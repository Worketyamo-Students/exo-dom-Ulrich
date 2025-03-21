let body = document.getElementById("body")
let Uliste = document.createElement("ul"); Uliste.className = 'liste'

body.prepend(Uliste)

let li1 = document.createElement('li'); li1.className = 'item1'; li1.id = "item1"; 
let li2 = document.createElement('li'); li2.className = 'item2'; li1.id = "item2"; 
let li3 = document.createElement('li'); li3.className = 'item3'; li1.id = "item3"; 
let li4 = document.createElement('li'); li4.className = 'item4'; li1.id = "item4"; // Creation des LI et ajouts des className et Id

Uliste.appendChild(li1)
Uliste.appendChild(li2)
Uliste.appendChild(li3)
Uliste.appendChild(li4) //Ajout des balises a la Uliste

let newUlist = Uliste.removeChild(li4) //suppression du dernier element

var e = prompt("Entrer du texte")
li1.textContent = e
const myArray = e.split(",");
console.log(myArray)

 //partie 6

 for(let i = 0; i < myArray.length; i++){
    let li5 = document.createElement('li'); li5.id = 'item-' + i;
    Uliste.appendChild(li5)
    li5.textContent = myArray[i]
    li5.style.fontSize = "20px"
    if (i == 0){
      li5.style.color ='green'
    } else if (i == 1){
      li5.style.color = 'red'
    } else if (i == 2){
      li5.style.color = 'yellow'
    }
 } //AJOUTS DES NOUVELLES LISTES ET LEURS STYLES

 //Partie 7
 
body.style.background = "black"; body.style.display = "flex"; body.style.justifyContent = "center"
Uliste.style.color = "white"; Uliste.style.display = "flex"; Uliste.style.flexDirection = "column"; Uliste.style.gap = '20px'
li1.style.fontSize = "24px"; li1.style.fontWeight = "bold"
li2.style.fontSize = "20px"; li3.style.fontSize = "20px"


