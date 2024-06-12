import "./style.css";

const turnoElement= document.getElementById("turno");
const previousButton = document.getElementById("anteriorTurno");
const nextButton = document.getElementById("siguienteTurno");
const resetButton = document.getElementById("resetTurno");
const numberInput =  document.getElementById("number");

let currentPosition = 0;
let maxPosition = 100;


if (previousButton !== null && previousButton !== undefined) {
   previousButton.addEventListener("click", function () {
     if (currentPosition > 0) {
       currentPosition--;
       turnoElement.innerHTML = currentPosition.toString().padStart(2, "0");
     }
   });
 } else {
   console.log("El botón no existe");
 }

 nextButton.addEventListener("click", function () {
   if (currentPosition < maxPosition) {
     currentPosition++;
     turnoElement.innerHTML = currentPosition.toString().padStart(2, "0");
   }
 });
 
 resetButton.addEventListener("click", function () {
   currentPosition = 0;
   turnoElement.innerHTML = currentPosition.toString().padStart(2, "0");
 });
 
 if (botonCambiarTurno !== null && botonCambiarTurno !== undefined) {
   botonCambiarTurno.addEventListener("click", function () {
     if (numberInput !== null && numberInput !== undefined) {
       const nuevoValor = numberInput.value;
 
       if (turnoElement !== null && turnoElement !== undefined) {
         turnoElement.innerHTML = nuevoValor.toString().padStart(2, "0");
       }
     }
   });
 }