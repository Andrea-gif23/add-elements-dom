 // Aquí tu código

const botonAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');


botonAgregar.addEventListener('click', function() {
  
  const nuevoElemento = prompt('Introduce un nuevo elemento para la lista:');
  

  if (nuevoElemento && nuevoElemento.trim() !== '') {
    
    const li = document.createElement('li');
    li.textContent = nuevoElemento;

   
    lista.appendChild(li);
  } else {
    
    alert('Por favor, ingresa un valor válido.');
  }
});
