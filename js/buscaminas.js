var min = 1;
var max = 3;
var posicionX = Math.floor(Math.random() * (max - min + 1) + min);
var posicionY = Math.floor(Math.random() * (max - min + 1) + min);
console.log(posicionX);
console.log(posicionY);
function Descubrir(fila, columna, filamina, columnamina) {
  if (fila == filamina && columna == columnamina) {
    document.getElementById("boton_" + fila + columna).innerHTML = '<i class="fa-solid fa-bomb"></i>';
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  } else {
    document.getElementById("boton_" + fila + columna).innerHTML = '<i class="fa-regular fa-hand-peace"></i>';
  }
}
