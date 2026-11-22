import { productos, CATEGORIAS, WHATSAPP } from "./catalogo-data.js";

const VISTAS = {
  productos: ["quimicos", "limpieza", "equipos", "confort"],
  mantenimiento: ["quimicos", "limpieza", "equipos"],
  repuestos: ["repuestos"],
  losetas: ["losetas"],
};

const ORDEN_FAMILIA = {
  quimicos: ["Cloro", "Alguicidas", "Clarificadores", "Fungicidas", "pH y limpieza", "Tratamientos", "Medición"],
  limpieza: ["Barrefondos", "Mangos y mangueras", "Cepillos y saca hojas", "Acoples", "Boyas", "Otros accesorios"],
  equipos: ["Bombas", "Filtros", "Skimmers", "Conexiones"],
  confort: ["Escaleras", "Duchas y cascadas", "Iluminación", "Cuidado del agua"],
  repuestos: ["Bombas", "Filtros", "Skimmer", "Iluminación", "Hidromasaje y duchas", "Juntas y fijaciones", "Otras piezas"],
  losetas: ["Losetas"],
};

const vista = document.body.dataset.vista || "productos";
const permitidas = VISTAS[vista] || VISTAS.productos;
const lista = productos.filter((producto) => permitidas.includes(producto.categoria));

const filtros = document.getElementById("filtros");
const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const ficha = document.getElementById("ficha");
const resumen = document.getElementById("resumen");

const normalizar = (texto) => (texto || "")
  .toLowerCase()
  .normalize("NFD")
  .replace(/\p{M}/gu, "");

function tamano(nombre) {
  const n = normalizar(nombre);
  const caja = n.match(/(\d+)\s*x\s*\d/);
  if (caja) return Number(caja[1]);
  const medida = n.match(/(\d+(?:[.,]\d+)?)\s*(l\b|kg\b|kilo|lt\b)/);
  if (!medida) return 400;
  return parseFloat(medida[1].replace(",", "."));
}

const enlaceWhatsapp = (nombre) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola! Quiero consultar por ${nombre}.`)}`;

let categoriaActiva = "todas";
let familiaActiva = "todas";

function ordenarGrupos(a, b) {
  const ca = permitidas.indexOf(a.categoria) - permitidas.indexOf(b.categoria);
  if (ca) return ca;
  const orden = ORDEN_FAMILIA[a.categoria] || [];
  return orden.indexOf(a.familia) - orden.indexOf(b.familia);
}

function crearTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";
  tarjeta.tabIndex = 0;
  tarjeta.setAttribute("role", "button");
  tarjeta.setAttribute("aria-label", `Ver ${producto.nombre}`);

  const foto = document.createElement("div");
  foto.className = "imagen-producto";
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.loading = "lazy";
  foto.appendChild(img);

  const familia = document.createElement("p");
  familia.className = "marca-familia";
  familia.textContent = producto.familia;

  const nombre = document.createElement("h3");
  nombre.className = "nombre-producto";
  nombre.textContent = producto.nombre;

  tarjeta.append(foto, familia, nombre);
  const abrir = () => mostrarFicha(producto);
  tarjeta.addEventListener("click", abrir);
  tarjeta.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      abrir();
    }
  });
  return tarjeta;
}

function renderFiltros() {
  if (!filtros) return;
  filtros.innerHTML = "";
  const categorias = [...new Set(lista.map((producto) => producto.categoria))];
  const familias = [...new Set(lista.map((producto) => producto.familia))];
  const usarCategorias = categorias.length > 1;

  const opciones = usarCategorias
    ? [["todas", "Ver todo"], ...categorias.map((categoria) => [categoria, CATEGORIAS[categoria] || categoria])]
    : familias.length > 1
      ? [["todas", "Ver todo"], ...familias.map((familia) => [familia, familia])]
      : [];

  opciones.forEach(([valor, etiqueta]) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "filtro";
    boton.textContent = etiqueta;
    const activo = usarCategorias ? valor === categoriaActiva : valor === familiaActiva;
    boton.setAttribute("aria-pressed", activo ? "true" : "false");
    boton.addEventListener("click", () => {
      if (usarCategorias) categoriaActiva = valor;
      else familiaActiva = valor;
      render();
    });
    filtros.appendChild(boton);
  });
}

function render() {
  if (!catalogo) return;
  const texto = normalizar(buscador ? buscador.value.trim() : "");
  let visibles = lista.filter((producto) => {
    if (categoriaActiva !== "todas" && producto.categoria !== categoriaActiva) return false;
    if (familiaActiva !== "todas" && producto.familia !== familiaActiva) return false;
    if (!texto) return true;
    return normalizar(`${producto.nombre} ${producto.familia} ${producto.descripcion}`).includes(texto);
  });

  catalogo.innerHTML = "";
  if (resumen) {
    const cantidad = visibles.length;
    resumen.textContent = cantidad === 1 ? "1 producto" : `${cantidad} productos`;
  }

  if (!visibles.length) {
    const vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.textContent = "No encontramos productos con esa búsqueda.";
    catalogo.appendChild(vacio);
    renderFiltros();
    return;
  }

  const grupos = [];
  visibles.forEach((producto) => {
    let grupo = grupos.find((item) => item.categoria === producto.categoria && item.familia === producto.familia);
    if (!grupo) {
      grupo = { categoria: producto.categoria, familia: producto.familia, items: [] };
      grupos.push(grupo);
    }
    grupo.items.push(producto);
    grupo.items.sort((a, b) => tamano(a.nombre) - tamano(b.nombre) || a.nombre.localeCompare(b.nombre, "es"));
  });
  grupos.sort(ordenarGrupos);

  grupos.forEach((grupo) => {
    const seccion = document.createElement("section");
    seccion.className = "grupo";
    const titulo = document.createElement("h2");
    const mostrarCategoria = categoriaActiva === "todas" && permitidas.length > 1;
    titulo.textContent = mostrarCategoria
      ? `${CATEGORIAS[grupo.categoria]} · ${grupo.familia}`
      : grupo.familia;
    const grilla = document.createElement("div");
    grilla.className = "grilla";
    grupo.items.forEach((producto) => grilla.appendChild(crearTarjeta(producto)));
    seccion.append(titulo, grilla);
    catalogo.appendChild(seccion);
  });

  renderFiltros();
}

function mostrarFicha(producto) {
  if (!ficha) return;
  ficha.querySelector("#ficha-img").src = producto.imagen;
  ficha.querySelector("#ficha-img").alt = producto.nombre;
  ficha.querySelector("#ficha-familia").textContent = `${CATEGORIAS[producto.categoria] || ""} · ${producto.familia}`;
  ficha.querySelector("#ficha-nombre").textContent = producto.nombre;
  ficha.querySelector("#ficha-descripcion").innerHTML = producto.descripcion;
  const boton = ficha.querySelector("#ficha-wsp");
  boton.href = enlaceWhatsapp(producto.nombre);
  ficha.hidden = false;
  document.body.classList.add("ficha-abierta");
  ficha.querySelector(".ficha-cerrar").focus();
}

function cerrarFicha() {
  if (!ficha) return;
  ficha.hidden = true;
  document.body.classList.remove("ficha-abierta");
}

if (ficha) {
  ficha.querySelector(".ficha-cerrar").addEventListener("click", cerrarFicha);
  ficha.addEventListener("click", (evento) => {
    if (evento.target === ficha) cerrarFicha();
  });
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && !ficha.hidden) cerrarFicha();
  });
}

if (buscador) buscador.addEventListener("input", render);

render();

const pedido = new URLSearchParams(location.search).get("producto");
if (pedido) {
  const producto = lista.find((item) => item.id === pedido) || productos.find((item) => item.id === pedido);
  if (producto) mostrarFicha(producto);
}
