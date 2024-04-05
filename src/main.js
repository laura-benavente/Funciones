import "./style.css";

const turnoElement= document.getElementById("turno");
const previousButton = document.getElementById("anteriorTurno");
const nextButton = document.getElementById("siguienteTurno");
const resetButton = document.getElementById("resetTurno");
const numberInput =  document.getElementById("number");

let currentPosition = 0;
let maxPosition = 100;


previousButton.addEventListener("click", function() {
   if (currentPosition > 0) {
      currentPosition--;
      turnoElement.innerHTML = currentPosition.toString()?.padStart(2, '0');
   }
});

nextButton.addEventListener("click", function() {
   if (currentPosition < maxPosition) {
      currentPosition++;
      turnoElement.innerHTML= currentPosition.toString()?.padStart(2, '0');
   }
});

resetButton.addEventListener("click", function() {
       currentPosition = 0;
       turnoElement.innerHTML = currentPosition.toString()?.padStart(2, '0');
 });
 
 numberInput.addEventListener("change", function(evento) {
    const nuevoValor = evento?.target?.value;
    turnoElement.innerHTML = nuevoValor.toString()?.padStart(2, '0');
 });