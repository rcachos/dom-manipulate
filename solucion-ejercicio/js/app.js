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
  e.preventDefault();
  // Delegation para agregar-carrito
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement;
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(curso);
  }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.discount').textContent,
    id: curso.querySelector('a').getAttribute('data-id')
  }
  insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el Carrito
function insertarCarrito(curso) {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>
  <img src="${curso.imagen}" width=100>
  </td>
  <td>${curso.titulo}</td>
  <td>${curso.precio}</td>
  <td>
  <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
  </td>
  `;
  listaCursos.appendChild(row);
  actualizarContadorItemsCarrito()

}

// mostrar contador de items en el carrito
function actualizarContadorItemsCarrito() {
  submenu.setAttribute('data-counter', listaCursos.childElementCount);
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso') ) {
    e.target.parentElement.parentElement.remove();
  }
  actualizarContadorItemsCarrito()

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
  // forma lenta
  // listaCursos.innerHTML = '';
  // forma rapida (recomendada)
  while(listaCursos.firstChild) {
    listaCursos.removeChild(listaCursos.firstChild);
  }
  actualizarContadorItemsCarrito()

}

//mostar u ocultar el carrito
function showCarrito(e) {
  carrito.classList.toggle('carrito--show')
}

//ocultar el carrito
function hiddenCarrito(e) {
  if(e.path.includes(submenu) || e.path.includes(carrito)) return
  carrito.classList.remove('carrito--show')
}