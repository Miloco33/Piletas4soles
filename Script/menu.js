const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

if (ham && menu) {
  ham.addEventListener("click", () => {
    const abierto = menu.classList.toggle("activado");
    ham.classList.toggle("animado", abierto);
    ham.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("activado");
      ham.classList.remove("animado");
      ham.setAttribute("aria-expanded", "false");
    });
  });
}

const pagina = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a").forEach((enlace) => {
  const href = (enlace.getAttribute("href") || "").replace("./", "");
  if (href === pagina) enlace.setAttribute("aria-current", "page");
});

const motivo = new URLSearchParams(location.search).get("motivo");
const selectMotivo = document.querySelector("[name=motivo]");
if (motivo && selectMotivo) selectMotivo.value = motivo;
