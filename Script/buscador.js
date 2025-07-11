import { productos } from './productos.js';

const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado");
const seleccion = document.getElementById("seleccion");
const productoNombre = document.getElementById("producto");
const productoDescripcion = document.getElementById("descripcion");
const productoImagen = document.getElementById("img-producto");
const botonWsp = document.getElementById("boton-wsp");
const lupa = document.getElementById("abrir-buscador");
const formBusqueda = document.getElementById("form-busqueda");


lupa.addEventListener("click", (e) => {
  e.preventDefault();
  formBusqueda.classList.toggle("oculto");
  if (!formBusqueda.classList.contains("oculto")) {
    buscador.focus();
  }
});


buscador.addEventListener("input", () => {
  seleccion.style.display = "none";
  const texto = buscador.value.toLowerCase().trim();
  resultado.innerHTML = "";

  if (texto === "") return;

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );

  if (filtrados.length === 0) {
    resultado.innerHTML = `<div class="no-resultados">No se encontraron productos.</div>`;
    return;
  }

  filtrados.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.addEventListener("click", () => mostrarProducto(producto));
    div.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" width="100px" height="100px">
      </div>
      <div class="nombre-producto">${producto.nombre}</div>
    `;
    resultado.appendChild(div);
  });
});


function mostrarProducto(producto) {
  
  productoNombre.textContent = producto.nombre;
  productoDescripcion.innerHTML = producto.descripcion;
  productoImagen.src = producto.imagen;
  botonWsp.href = `https://wa.me/?text=Hola, quiero consultar por el producto: ${encodeURIComponent(producto.nombre)}`;
  seleccion.style.display = "block";
  whatsappBtn.style.display = "none"; 
}

window.cerrar = function () {
  seleccion.style.display = "none";
  whatsappBtn.style.display = "block"; 
};



window.cerrar = function () {
  seleccion.style.display = "none";
};


document.addEventListener("click", function (e) {
  const dentroBusqueda = e.target.closest("#busqueda");
  const esLupa = e.target.closest("#abrir-buscador");

  if (!dentroBusqueda && !esLupa) {
    formBusqueda.classList.add("oculto");
    resultado.innerHTML = "";
  }
});