// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const submenu = document.querySelector('.submenu');
const submenuBtn = submenu.querySelector('#img-carrito');
const app = document.querySelector('body');


// Listeners
cargarEventListeners();
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  cursos.addEventListener('click', comprarCurso);
  // Cuando se elimina un curso del carrito
  carrito.addEventListener('click', eliminarCurso);
  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  // mostrar carrito
  submenuBtn.addEventListener('click', showCarrito);
  // mostrar carrito
  app.addEventListener('click', hiddenCarrito);
}

// Funciones
// Función que añade el curso al carrito
function comprarCurso(e) {

}

// Lee los datos del curso
function leerDatosCurso(curso) {

}

// Muestra el curso seleccionado en el Carrito
function insertarCarrito(curso) {

}

// mostrar contador de items en el carrito
function actualizarContadorItemsCarrito() {

}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {

}

//mostar u ocultar el carrito
function showCarrito(e) {

}

//ocultar el carrito
function hiddenCarrito(e) {

}