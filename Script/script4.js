const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu');
const barra = document.querySelectorAll('.ham span');
const lupa = document.getElementById("abrir-buscador");

const ha2 = document.querySelector('.ha2');
const enlaces2 = document.querySelector('.menu-catalogo');
const barra2 = document.querySelectorAll('.ha2 span');

const ha3 = document.querySelector('.ha3');
const enlaces3 = document.querySelector('.menu-productos');
const barra3 = document.querySelectorAll('.ha3 span');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barra.forEach(child => child.classList.toggle('animado'));

 
  enlaces2.classList.remove('activo');
  enlaces3.classList.remove('activao');


  if (enlaces.classList.contains('activado')) {
    lupa.style.display = 'none';
  } else {
    lupa.style.display = 'inline-block';
  }
});

ha2.addEventListener('click', () => {
  enlaces2.classList.toggle('activo');
  barra2.forEach(child => child.classList.toggle('animado'));

  
  enlaces.classList.remove('activado');
  enlaces3.classList.remove('activao');


  lupa.style.display = 'inline-block';
});

ha3.addEventListener('click', () => {
  enlaces3.classList.toggle('activao');
  barra3.forEach(child => child.classList.toggle('animado'));


  enlaces.classList.remove('activado');
  enlaces2.classList.remove('activo');


  lupa.style.display = 'inline-block';
});