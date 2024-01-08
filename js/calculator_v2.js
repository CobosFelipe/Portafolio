// Identificacdor del imput en el html
const inputNumber = document.getElementById("inputNumber");
// Variables globales
let num1 = 0;
let num2 = 0;
let operador = "";

// Botones numericos
const buttons = [
  { id: "btn0", value: "0" },
  { id: "btn1", value: "1" },
  { id: "btn2", value: "2" },
  { id: "btn3", value: "3" },
  { id: "btn4", value: "4" },
  { id: "btn5", value: "5" },
  { id: "btn6", value: "6" },
  { id: "btn7", value: "7" },
  { id: "btn8", value: "8" },
  { id: "btn9", value: "9" },
];

// Botones de operaciones
const operacion = [
  { id: "btnSum", value: "+" },
  { id: "btnRest", value: "-" },
  { id: "btnMulti", value: "*" },
  { id: "btnDiv", value: "/" },
];

// Recorrer botones
buttons.forEach((e) => {
  document
    .getElementById(e.id)
    .addEventListener("click", () => appendToInput(e.value));
});

// Operaciones
operacion.forEach((e) => {
  document
    .getElementById(e.id)
    .addEventListener("click", () => setOperacion(e.value));
});

// Funciones
function appendToInput(value) {
  inputNumber.value += value;
}

function setOperacion(value) {
  if (inputNumber.value !== "") {
    num1 = parseFloat(inputNumber.value);
    operador = value;
    inputNumber.value = "";
  }
}

// Ejecutar operaciones
function operaciones() {
  if (inputNumber.value !== "" && operador !== "") {
    num2 = parseFloat(inputNumber.value);
    switch (operador) {
      case "+":
        inputNumber.value = num1 + num2;
        break;
      case "-":
        inputNumber.value = num1 - num2;
        break;
      case "*":
        inputNumber.value = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          inputNumber.value = "No se puede dividir entre cero";
        } else {
          inputNumber.value = num1 / num2;
        }
        break;
    }
    operador = 0;
    num1 = 0;
    num2 = 0;
    setTimeout(() => {
      inputNumber.value = "";
    }, 3000);
  }
}

// Clear data
function botonC() {
  inputNumber.value = "";
  num1 = 0;
  num2 = 0;
  operador = "";
}

// Eventos onClick
document
  .getElementById("btnEqual")
  .addEventListener("click", () => operaciones());
document.getElementById("btnC").addEventListener("click", () => botonC());
