// Elementos principales del DOM.
const botonesJugada = document.querySelectorAll(".boton-jugada");
const textoJugadaJugador = document.querySelector("#jugada-jugador");
const textoJugadaComputadora = document.querySelector("#jugada-computadora");
const textoResultado = document.querySelector("#resultado");

let computer = 0
let player = 0

// Opciones disponibles para el juego.
const opciones = ["piedra", "papel", "tijeras"];

/*
  Responsabilidad:
  Obtener una jugada para la computadora.

  TODO:
  Generar una opcion aleatoria.
*/
function obtenerJugadaComputadora() {
  return opciones[Math.floor(Math.random() * opciones.length)];
}

/*
  Responsabilidad:
  Recibir la jugada del jugador y la jugada de la computadora.

  TODO:
  Comparar jugadas.
*/
function determinarGanador(jugadaJugador, jugadaComputadora) {

  if (jugadaJugador === jugadaComputadora) return "Empate";



  if (

    (jugadaJugador === "piedra" && jugadaComputadora === "tijeras") ||

    (jugadaJugador === "papel" && jugadaComputadora === "piedra") ||

    (jugadaJugador === "tijeras" && jugadaComputadora === "papel")

  ) return "Ganaste";


  return "Perdiste";


}

/*
  Responsabilidad:
  Actualizar los textos visibles en la pagina.

  TODO:
  Mostrar resultado.
*/
function actualizarPantalla(jugadaJugador, jugadaComputadora, resultado) {
  document.getElementById('jugada-jugador').textContent = jugadaJugador;
  document.getElementById('jugada-computadora').textContent = jugadaComputadora;
  document.getElementById('resultado').textContent = resultado;
  // document.getElementById('historial').textContent = resultado;
}

function sumarPunto(resultado) {
  if (resultado === "Ganaste") {
    player++
    document.getElementById('puntos-jugador').textContent = player;
  } else if (resultado === "Perdiste") {
    computer++
    document.getElementById('puntos-computadora').textContent = computer;
  }
}

/*
  Responsabilidad:
  Coordinar una partida completa.

  Sugerencia:
  Esta funcion puede llamar a obtenerJugadaComputadora(),
  determinarGanador() y actualizarPantalla().
*/
function jugar(jugadaJugador) {
  const jugadaComputadora = obtenerJugadaComputadora()
  const resultado = determinarGanador(jugadaJugador, jugadaComputadora)
  actualizarPantalla(jugadaJugador, jugadaComputadora, resultado)
  sumarPunto(resultado)
}

// Punto de partida: escuchar clicks en los botones del juego.
botonesJugada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const jugadaJugador = boton.dataset.jugada;
    jugar(jugadaJugador);
  });
});
