let nameInput = ''
let ageInput = ''
let colorInput = ''


updateView()
function updateView() {
    document.getElementById("brukerProfil").innerHTML = /*HTML*/`
   
    <input id= "myName">
    <br>
    <input id= "myAge">
    <br>
    <input id= "myColor">
    <br>
    <button onclick= "enterText()">Enter</button>
    <br>

    <p>${nameInput}</p>
    <p>${ageInput}</p>
    <p>${colorInput}</p>
    `
}

function enterText() {
    nameInput = document.getElementById('myName').value //Siden let nameInput står tomt, så henter den verdien som blir gitt i inputfeltet og sender med som parameter. Det samme gjelder for alder og farge også.
    ageInput = document.getElementById('myAge').value
    colorInput = document.getElementById('myColor').value
    console.log(nameInput, ageInput, colorInput)

    document.getElementById('body').style.backgroundColor = colorInput

    updateView()
}
