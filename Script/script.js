const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu');
const barra = document.querySelectorAll('.ham span');
const lupa = document.getElementById("abrir-buscador");
const formBusqueda = document.getElementById("form-busqueda");
const resultado = document.getElementById("resultado");
const busqueda =document.getElementById("busqueda");

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barra.forEach(child => child.classList.toggle('animado'));

  const enlaces2 = document.querySelector('.menu-catalogo');
  enlaces2.classList.remove('activo');

   if (enlaces.classList.contains('activado')) {
    lupa.style.display = 'none';
    busqueda.style.margin = '50px';
  }

  resultado.innerHTML = "";

  if (enlaces.classList.contains('activado')) {
    lupa.style.display = 'none';
  } else {
    lupa.style.display = 'inline-block';
  }
});

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');

let indiceImagen = 0;

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});

btnCierra.addEventListener('click', () => {
    lightbox.style.display = "none";
});

const adelantaImagen = () => {
    indiceImagen = (indiceImagen + 1) % imagenes.length;
    imagenActiva.src = imagenes[indiceImagen].src;
};

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocedeImagen = () => {
    indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
    imagenActiva.src = imagenes[indiceImagen].src;
};

btnRetrocede.addEventListener('click', retrocedeImagen);

/*---------------------------------------------------*/



document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            adelantaImagen();
        } else if (e.key === 'ArrowLeft') {
            retrocedeImagen();
        } else if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    }
});