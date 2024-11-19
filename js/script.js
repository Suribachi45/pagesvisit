// contador y el botón
const contador = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

// Obtener el valor actual 
let visitas = localStorage.getItem('visitas');

// Si no hay valor almacenado, inicializar a 0
if (visitas === null) {
  visitas = 0;
} else {
  // Convertir el valor almacenado a número
  visitas = parseInt(visitas);
}

// Actualizar el contador en la página
contador.textContent = visitas;

// Incrementar el contador cada vez que se carga la página 
visitas++;
localStorage.setItem('visitas', visitas);

//  Reestablecer el contador
btnReestablecer.addEventListener('click', () => {
  visitas = 0;
  localStorage.setItem('visitas', visitas);
  contador.textContent = visitas;
});