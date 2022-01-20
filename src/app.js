function generadorPalos() {
  let palos = ["♦", "♥", "♠", "♣"];
  let palosAleatorio = Math.floor(Math.random() * palos.length);
  return palos[palosAleatorio];
}

function generadorNumeros() {
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numerosAleatorio = Math.floor(Math.random() * numeros.length);
  return numeros[numerosAleatorio];
}

function inyectaNumero() {
  document.getElementById("numero").innerHTML = generadorNumeros();
}

function inyectaPalos() {
  let paloElegido = generadorPalos();
  cambiaColor(paloElegido);
  cambiaForma();
  document.getElementById("paloArriba").innerHTML = paloElegido;
  document.getElementById("paloAbajo").innerHTML = paloElegido;
}

function cambiaColor(palo) {
  if (palo === "♥" || palo === "♦") {
    document.getElementById("paloArriba").style.color = "red";
    document.getElementById("paloAbajo").style.color = "red";
    document.getElementById("numero").style.color = "red";
  }
}

function cambiaForma() {
  document.getElementById("paloAbajo").style.transform = "rotate(180deg)";
}

inyectaPalos();
inyectaNumero();
