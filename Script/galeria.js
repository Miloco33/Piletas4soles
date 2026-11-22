const btnCierra = document.querySelector("#btn-cierra");
const btnAdelanta = document.querySelector("#btn-adelanta");
const btnRetrocede = document.querySelector("#btn-retrocede");
const lightbox = document.querySelector("#contenedor-principal");
const imagenActiva = document.querySelector("#img-activa");
const imagenes = [...document.querySelectorAll(".galeria img")];

if (btnCierra && btnAdelanta && btnRetrocede && lightbox && imagenActiva && imagenes.length) {
  let indice = 0;

  const mostrar = (i) => {
    indice = (i + imagenes.length) % imagenes.length;
    imagenActiva.src = imagenes[indice].src;
    imagenActiva.alt = imagenes[indice].alt || "";
    lightbox.style.display = "flex";
  };

  imagenes.forEach((imagen, i) => {
    imagen.addEventListener("click", () => mostrar(i));
  });

  btnCierra.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  btnAdelanta.addEventListener("click", () => mostrar(indice + 1));
  btnRetrocede.addEventListener("click", () => mostrar(indice - 1));

  lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) lightbox.style.display = "none";
  });

  document.addEventListener("keydown", (evento) => {
    if (lightbox.style.display !== "flex") return;
    if (evento.key === "ArrowRight") mostrar(indice + 1);
    else if (evento.key === "ArrowLeft") mostrar(indice - 1);
    else if (evento.key === "Escape") lightbox.style.display = "none";
  });
}
