/*Lag en nettside der brukeren kan skrive inn:
navn
alder
favorittfarge
Lag en funksjon som tar disse verdiene som parametere og:
viser navnet og alderen i en tekst på siden
-endrer bakgrunnsfargen basert på favorittfargen
Funksjonen skal kunne brukes flere ganger med ulike verdier.*/

let nameInput = ''
let ageInput = ''
let colorInput = ''


updateView()
function updateView() {
    document.getElementById("brukerProfil").innerHTML = /*HTML*/`
   
    <input id= "myName" onchange= 'saveName(this.value)'> Name
    <br>
    <input id= "myAge" onchange= 'saveAge(this.value)'> Age
    <br>
    <input id= "myColor" onchange= 'saveColor(this.value)'> Color
    <br>
    <button onclick= "enterText()">Enter</button>
    <br>

    <p>${nameInput}</p>
    <p>${ageInput}</p>
    <p>${colorInput}</p>
    `
}

function enterText() {
    console.log(nameInput, ageInput, colorInput)
    document.getElementById('body').style.backgroundColor = colorInput
    updateView()
}

function saveName(name){
nameInput = name
}

function saveAge(age){
    ageInput = age
}

function saveColor(color){
    colorInput = color
}