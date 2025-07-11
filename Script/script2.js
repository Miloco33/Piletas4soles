const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu');
const barra = document.querySelectorAll ('.ham span');
const lupa = document.getElementById("abrir-buscador");
const busquedas =document.getElementById("busqueda");

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
  barra.forEach (child => {child.classList.toggle('animado')});
  enlaces3.classList.remove('activao');
   if (enlaces.classList.contains('activado')) {
    lupa.style.display = 'none';
    busquedas.style.margin = '50px';
  } else {
    lupa.style.display = 'inline-block';
    busquedas.style.margin = '0';
  }
});

const ha3 = document.querySelector('.ha3');
const enlaces3 = document.querySelector('.menu-productos');
const barra3 = document.querySelectorAll ('.ha3 span');

ha3.addEventListener('click', ()=>{
  enlaces3.classList.toggle('activao');
  barra3.forEach (child => {child.classList.toggle('animado')});
  enlaces.classList.remove('activo');
});

const container = document.getElementById("container");



  const productos = [
    {
id: "alguicidaunyclor",
nombre: "Alguicida Unyclor",
imagen: "./img/Productos/unyclor alg.jpeg",
descripcion:"Producto Unyclor, mantiene tu piscina limpia y cristalina.<br> Con su fórmula efectiva, es ideal para el mantenimiento regular.<br> Encontralo a un precio increible!",
},
  {
   id: "clarificadorunyclor",
nombre: "Clarificador Unyclor",
imagen: "./img/Productos/unyclor clarif.jpeg",
descripcion:"Producto Unyclor, mantiene tu piscina limpia y cristalina.<br> Con su fórmula efectiva, es ideal para el mantenimiento regular.<br> Encontralo a un precio increible!",
},
  {
  id: "unycelunyclor",
nombre: "Unycel Triple Acción",
imagen: "./img/Productos/unyclor unycel.jpeg",
descripcion:"Producto Unyclor, mantiene tu piscina limpia y cristalina.<br> Con su fórmula efectiva, es ideal para el mantenimiento regular.<br> Encontralo a un precio increible!",
  },
  {
  id: "gelunyclor",
nombre: "Gel Clarificador Unyclor",
imagen: "./img/Productos/unyclor gel.jpeg",
descripcion:"Producto Unyclor, mantiene tu piscina limpia y cristalina.<br> Con su fórmula efectiva, es ideal para el mantenimiento regular.<br> Encontralo a un precio increible!",
  },
  {
    nombre: "Ácido muriático x5L.",
    descripcion: `Ácido muriático Volker 5L.<br>
      Para limpieza de pisos y paredes previo a pintar o llenar la piscina. También para bajar el nivel de PH del agua.<br>
      <strong>Uso:</strong><br>
      - Para bajar el pH de la piscina.<br>
      - Cómo decapante de metales y soldaduras.<br>
      - Para eliminar cemento y concreto en construcción.<br>
      - Para eliminar el sarro.<br>
      - Para el curado de pisos cerámicos.<br>
      - Para limpieza de frentes de ladrillos.`,
    imagen: "./Img/Productos/acidomuriatico.webp"
  },
    {
    nombre: "Alguicida x5L.",
    descripcion: `<strong>Características Destacadas del Alguicida Líquido 5 L Nataclor:</strong><br>
    - Fórmula efectiva contra algas<br>
    - Envase de 5 litros<br>
    - Fácil de usar<br>
    - Ideal para mantenimiento regular<br><br>`,
    imagen: "./Img/Productos/alguicida-5l.jpg"
  },
  {
    nombre: "Alguicida",
    descripcion: `Elegí este alguicida líquido para mantener tu piscina limpia y cristalina. Con su fórmula efectiva, es ideal para el mantenimiento regular.<br><br>
<strong>Características Destacadas del Alguicida Líquido 1 L Nataclor:</strong><br>
- Fórmula efectiva contra algas<br>
- Envase de 1 litro<br>
- Fácil de usar<br>
- Ideal para mantenimiento regular<br><br>
Este alguicida es ideal para mantener tu piscina limpia y cristalina.`,
    imagen: "./Img/Productos/alguicida.jpg"
  },
  {
    nombre: "Super Alguicida",
    descripcion: `<strong>SUPER ALGUICIDA LA SOLUCIÓN AL AGUA VERDE.</strong><br>
Elimina las algas verdes que se hayan formado en la piscina.<br>
Si su piscina tiene el agua verde, se encuentra ante la presencia de algas.<br>
SUPER Alguicida Nataclor es la solución para eliminar las algas verdes de su piscina y recuperar el agua en pocos días.<br>
Aplicar 1 litro de SUPER Alguicida Nataclor previamente diluidos en un balde con un poco de agua cada 200.000 litros cada 5 a 7 días.`,
    imagen: "./Img/Productos/super-alguicida.jpg"
  },
  {
    nombre: "Clarificador",
    descripcion: `Elegí este clarificador líquido para mantener el agua de tu piscina limpia y transparente. Con su fórmula efectiva, es ideal para el mantenimiento regular.<br><br>
<strong>Características Destacadas del Clarificador Liquido 1 L Nataclor:</strong><br>
- Fórmula efectiva para agua transparente<br>
- Envase de 1 litro<br>
- Fácil de usar<br>
- Ideal para mantenimiento regular<br><br>
Este clarificador es ideal para mantener el agua de tu piscina limpia y transparente.`,
    imagen: "./Img/Productos/clarificador.jpg"
  },
  {
    nombre: "Clarificador x5L.",
    descripcion: `Elegí este clarificador líquido para mantener el agua de tu piscina limpia y transparente. Con su fórmula efectiva, es ideal para el mantenimiento regular.<br><br>
<strong>Características Destacadas del Clarificador Liquido 5 L Nataclor:</strong><br>
- Fórmula efectiva para agua transparente<br>
- Envase de 5 litros<br>
- Ideal para mantenimiento regular<br><br>
Este clarificador es ideal para mantener el agua de tu piscina limpia y transparente.`,
    imagen: "./Img/Productos/clarificador-5l.jpg"
  },
  {
    nombre: "Fungicida",
    descripcion: `Previene la formación y combate la presencia de algas negras (hongos negros), siendo eficaz también para todo tipo de algas.<br>
Ante una fuerte presencia de hongos negros, cepillar las manchas en paredes y piso.<br>
Filtrar el agua, y aplicar la misma dosis.<br>
<strong>Uso</strong><br>
Se vierte en el agua de la piscina, previamente diluido una parte cada diez de agua. Luego filtrar por 5 horas. Se recomienda cepillar las manchas antes de la aplicación y continuar el cepillado diariamente como mínimo dos días después de la aplicación.`,
    imagen: "./Img/Productos/fungicida.jpg"
  },
  {
    nombre: "Cloro granulado 1 kilo.",
    descripcion: `El cloro granulado disolución rápida es ideal para mantener desinfectada el agua de tu pileta.<br>
Apto para piscinas pintadas por su grano fino y nivel de concentración de cloro que evitan la decoloración.<br>
Cloro activo al 60 %.<br><br>

<strong>La dosificación puede variar según los siguientes factores:</strong><br>
- Volumen de agua.<br>
- Cantidad de usuarios.<br>
- Uso de la piscina.<br>
- Temperatura del agua.<br>
- Lluvias.<br>
- Juegos de agua y otros.`,
    imagen: "./Img/Productos/cloro1kgbolsa.jpg"
  },
  {    nombre: "Gel clarificador",
    descripcion: `Gel Clarificador para pileta NATACLOR 75grs.<br><br>
<strong>Gel Clarificador para pileta.</strong><br><br>
- Aumenta la eficiencia del filtro de arena.<br>
- Tratamiento prolongado.<br>
- Clarifica el agua sin decantar.<br>
- Ideal cuando se utilizan robots limpia piscinas.<br><br>
Uso: se coloca dentro de la trampa de pelos o skimmer.<br>
Dosificación: <br>Cada 50.000 litros: 1 gel Clarificador para pileta cada 20 dias aproximadamente.`,
    imagen: "./Img/Productos/gel-clarificador.jpg"
  },
  {
    nombre: "oxypool",
    descripcion: `Ultra Rápido OXYPOOL de Nataclor.<br>
- Efecto Inmediato.<br>
- Acción Prolongada.<br>
- Elimina microorganismos.<br>
Se disuelve rápidamente en el agua matando bacterias, algas y virus mientras que el oxígeno ayuda a eliminar la materia orgánica al primer contacto, aumentando el nivel de oxígeno disuelto en el agua de la piscina, lo que resulta en una piscina clara y brillante.<br>
<strong>¿Cómo dosificar?</strong><br>
-Una medida de 20 gramos cada 10.000 litros de agua, todos los días al caer el sol.<br>
-Si la piscina se utiliza en forma excesiva, llueve o hace mucho calor, se recomienda duplicar la dosis.`,
    imagen: "./Img/Productos/oxypool.jpg"
  },
  {
    nombre: "Barrefondo de aluminio 35cm.",
    descripcion: `Limpiafondos de aluminio 35cm Vulcano. <br>
Dispositivo para aspirar suciedad y residuos depositados en el fondo de la piscina.<br>
Para utilizarlo, se debe conectar la manguera flotante al acople de aspiración y un mango fijo o telescópico.<br>
Posee 4 ruedas fijas y 35 cm de ancho, pensado para uso profesional.`,
    imagen: "./Img/Productos/aluminio35cm.jpg"
  },
  {
    nombre: "Barrefondo de aluminio 48cm.",
    descripcion: `Limpiafondos de aluminio 48 cm Vulcano. <br>
Dispositivo para aspirar suciedad y residuos depositados en el fondo de la piscina. <br>
Para utilizarlo, se debe conectar la manguera flotante al acople de aspiración y un mango fijo o telescópico.<br>
Posee 4 ruedas fijas y 48 cm de ancho, pensado para uso profesional.<br><br>
Para su correcto funcionamiento se sugiere usar con bomba de 0,75HP o superior.`,
    imagen: "./Img/Productos/aluminio48cm.jpg"
  },
  {
    nombre: "Mango estriado de aluminio 1.5m",
    descripcion: `Mango fijo Vulcano.<br> Fabricado de aluminio anodizado estriado, cuenta con ø19 mm y largo total de 1,50 m. Sus características constructivas, brindan resistencia mecánica y a la corrosión, permitiendo utilizarlo bajo altas exigencias.`,
    imagen: "./Img/Productos/mangoaluminio.jpg"
  },
  {
    nombre: "Mango telescópico 2.4m",
    descripcion: `Mango telescópico Vulcano.<br> Fabricado de aluminio anodizado estriado, cuenta con ø32 mm y largo total de 2,40 m, con tuerca de ajuste y traba. Sus características constructivas, brindan resistencia mecánica y a la corrosión, permitiendo utilizarlo bajo altas exigencias.<br><br>
Está compuestos por 2 tubos que encajan uno en el interior del otro, con posibilidad de desplazamiento. El largo del mismo se ajusta fácilmente y se traba por medio de su tuerca y boquilla correspondiente.`,
    imagen: "./Img/Productos/mangotelescopico.jpg"
  },
  {
    nombre: "Mango telescópico 3.6m",
    descripcion: `Mango telescópico Vulcano.<br> Fabricado de aluminio anodizado estriado, cuenta con ø32 mm y largo total de 3,60 m, con tuerca de ajuste y traba. Sus características constructivas, brindan resistencia mecánica y a la corrosión, permitiendo utilizarlo bajo altas exigencias.<br><br>
Está compuestos por 2 tubos que encajan uno en el interior del otro, con posibilidad de desplazamiento. El largo del mismo se ajusta fácilmente y se traba por medio de su tuerca y boquilla correspondiente.`,
    imagen: "./Img/Productos/mangotelescopico.jpg"
  },
  {
    nombre: "Mango telescópico 4.8",
    descripcion: `Mango telescópico Vulcano.<br> Fabricado de aluminio anodizado estriado, cuenta con ø32 mm y largo total de 4,80 m, con tuerca de ajuste y traba. Sus características constructivas, brindan resistencia mecánica y a la corrosión, permitiendo utilizarlo bajo altas exigencias.<br><br>
Está compuestos por 2 tubos que encajan uno en el interior del otro, con posibilidad de desplazamiento. El largo del mismo se ajusta fácilmente y se traba por medio de su tuerca y boquilla correspondiente.`,
    imagen: "./Img/Productos/mangotelescopico.jpg"
  },
  {
    nombre: "Manguera autoflotante de 1/2″",
    descripcion: `La manguera está diseñada para la aspiración y limpieza de piscinas. Su índice de flotación no permite la fricción contra el fondo, evitando así la dispersión de los sedimentos.<br><br>
<strong>CARACTERÍSTICAS TÉCNICAS DE LA MANGUERA</strong><br><br>
- Manguera flexible autoflotante bicolor de diámetro ø 1 1/2″.<br>
- Fabricadas con material virgen, garantiza una excelente vida útil, resistiendo a la abrasión por los rozamientos que se producen normalmente con el uso.`,
    imagen: "./Img/Productos/manguera1-2.jpg"
  },
  {
    nombre: "Manguera autoflotante de 1/4″",
    descripcion: `Manguera de PVC construida en una sola pieza sin soldaduras, lo que hace que la misma tenga una muy buena vida útil. Por ser flotante, no roza con el fondo de la piscina, evitando que los sedimentos se muevan.<br>
No se desarma, es totalmente hermética, debido a su confección, y flota sin dificultad.`,
    imagen: "./Img/Productos/manguera1-4.jpg"
  },
  {
    nombre: "Manometro",
    descripcion: `Manometro de escala colorimétrica: 0 - 4 kg/cm.<br>Diámetro: 50 mm.`,
    imagen: "./Img/Productos/Manometro.webp"
  },
  {
    nombre: "Abrazaderas desde 30mm a 50mm",
    descripcion: `Abrazadera Vulcano. Acero inoxidable 30 mm a 50 mm.`,
    imagen: "./Img/Productos//Vulcano/abrazadera30a50.webp"
  },
  {
    nombre: "Acople rápido Vulcano 90° 1 1/2 y 1 1/4.",
    descripcion: `Acople rápido Vulcano. Liso en forma de codo de 90°, para caño de ø1 1/2. Se utiliza este accesorio para la conexión de:<br>
• Mangueras flotantes con limpiafondos.<br>
• Mangueras flotantes con virolas de aspiración.<br>
• Mangueras con bocas de impulsión de bombas.<br>
• Caños rígidos pegados y roscados entre sí.<br>
• Caños con válvulas componentes del circuito.`,
    imagen: "./Img/Productos//Vulcano/acople90°.webp"
  },
  {
    nombre: "Limpiafondo 8 Ruedas giratorias",
    descripcion: `Limpiafondos rígido 8 ruedas giratorias Vulcano. Dispositivo para aspirar suciedad y residuos depositados en el fondo de la piscina. Para utilizarlo, se debe conectar la manguera flotante al acople de aspiración y un mango fijo o telescópico.<br>
<strong>Posee 8 ruedas giratorias, lo que le otorga gran desempeño y movilidad en todos los sentidos.</strong>`,
    imagen: "./Img/Productos//Vulcano/8ruedasmoviles.webp"
  }, {
    nombre: "Acople rápido recto combinado 1 1/4″ – 1 1/2″",
    descripcion: `Acople rápido Vulcano. Ráecto liso, con conexión combinada, para caños de ø1 1/4″ - 1 1/2″. Se utiliza este accesorio para la conexión de:<br>
• Mangueras flotantes con limpiafondos.<br>
• Mangueras flotantes con virolas de aspiración.<br>
• Mangueras con bocas de impulsión de bombas.<br>
• Caños rígidos pegados y roscados entre sí.<br>
• Caños con válvulas componentes del circuito.`,
    imagen: "./Img/Productos//Vulcano/acoplecombinado.webp"
  },
  {
    nombre: "Acople giratorio recto combinado 1 1/4″ – 1 1/2″",
    descripcion: `Acople giratorio Vulcano. Liso con conexión combinada, para caños de ø1 1/4″ - 1 1/2″`,
    imagen: "./Img/Productos//Vulcano/acoplegiratorio.webp"
  },
  {
    nombre: "Acople rápido p/caño de PVC M-H rosca 1 1/2″ – pegar ø40",
    descripcion: `Acople rápido Vulcano. Para caño de PVC M-H rosca 1 1/2″  - pegar ø40. Se utiliza este accesorio para la conexión de:<br>
• Mangueras flotantes con limpiafondos.<br>
• Mangueras flotantes con virolas de aspiración.<br>
• Mangueras con bocas de impulsión de bombas.<br>
• Caños rígidos pegados y roscados entre sí.<br>
• Caños con válvulas componentes del circuito.`,
    imagen: "./Img/Productos//Vulcano/acoplepcaño.webp"
  },
  {
    nombre: "Acople rápido recto liso 1 1/2″",
    descripcion: `Acople rápido Vulcano. Recto liso, para caño de ø1 1/2″. Se utiliza este accesorio para la conexión de:<br>
• Mangueras flotantes con limpiafondos.<br>
• Mangueras flotantes con virolas de aspiración.<br>
• Mangueras con bocas de impulsión de bombas.<br>
• Caños rígidos pegados y roscados entre sí.<br>
• Caños con válvulas componentes del circuito.`,
    imagen: "./Img/Productos//Vulcano/acopleRecto.webp"
  },
  {
    nombre: "Boya dosificadora Reforzada",
    descripcion: `Boya dosificadora de cloro Vulcano modelo Exo, para pastillas de 50 y 200 g, con ojal para limitar su movilidad dentro del espejo de agua. La boya dosificadora flota sobre la superficie de la piscina conteniendo pastillas de cloro de disolución lenta o triple acción que, al al entrar en contacto con el agua, se disuelven lentamente.<br>
El volumen de intercambio entre el interior y exterior puede ajustarse mediante un regulador.`,
    imagen: "./Img/Productos//Vulcano/boyadosificadora.webp"
  },
  {
    nombre: "Anclaje para ducha",
    descripcion: `Anclaje Vulcano para ducha. Fabriacado de polipropileno con fibra de vidrio. Dispone de un borne con conexión a tierra; su sistema permite la correcta sujeción al piso con excelente terminación debido a que incluye un aro vista de acero inoxidable con terminación pulida brillante.`,
    imagen: "./Img/Productos//Vulcano/Anclaje para ducha.webp"
  },
  {
    nombre: "Bomba Autodrenante",
    descripcion: `Diseñada especialmente para sistemas de hidromasajes y spas, dando un óptimo rendimiento de presión-caudal y con la capacidad de auto evacuar toda el agua de su interior.
Cuenta con un sistema de drenaje total y está provista de 2 uniones dobles para pegar ø50 y 1 unión doble Tee para pegar ø40.<br>
(Consultar tipo de conexión y potencia)`,
    imagen: "./Img/Productos//Vulcano/bombaautodrenante.webp"
  },
  {
    nombre: "Cascada Cisne 108cm",
    descripcion: `Cascada tubular Vulcano. Fabricada de acero inoxidable, posee boquilla plana, y altura de 108 cm, pensada para ser colocada verticalmente en la vereda o dentro de la piscina, produce una lámina de agua vistosa y continua hasta el espejo de agua. Su terminación pulido brillante destaca y ofrece un distintivo ornamental para su piscina.`,
    imagen: "./Img/Productos//Vulcano/Cascada Cisne 108.webp"
  },
  {
    nombre: "Cascada Cisne 17cm",
    descripcion: `Cascada tubular Vulcano. Fabricada de acero inoxidable, posee boquilla plana y largo de 17 cm, pensada para ser colocada horizontalmente en pared, produce una lámina de agua vistosa y continua hasta el espejo de agua. Su terminación pulido brillante destaca y ofrece un distintivo ornamental para su piscina.`,
    imagen: "./Img/Productos//Vulcano/Cascada Cisne 17.webp"
  },
  {
    nombre: "Cascada Cisne 43cm",
    descripcion: `Cascada tubular Vulcano. Fabricada de acero inoxidable, posee boquilla plana, y largo de 43 cm, pensada para ser colocada horizontalmente en pared, produce una lámina de agua vistosa y continua hasta el espejo de agua. Su terminación pulido brillante destaca y ofrece un distintivo ornamental para su piscina.`,
    imagen: "./Img/Productos//Vulcano/Cascada Cisne 43.webp"
  },
  {
    nombre: "Cascada Palma 78cm",
    descripcion: `Cascada volumétrica Vulcano. Fabricada de en AISI 304, pensada para ser colocada en la vereda con altura de 78 cm. Genera una lámina de agua vistosa y continua de 50 cm de ancho hasta el espejo de agua. Su terminación pulido brillante destaca y ofrece un distintivo ornamental para su piscina.`,
    imagen: "./Img/Productos//Vulcano/Cascada Palma 78.webp"
  },
  {
    nombre: "Cascada Palma 46cm",
    descripcion: `Cascada volumétrica Vulcano. Fabricada de acero inoxidable, pensada para ser colocada en la vereda con una altura de 46 cm. Genera una lámina de agua vistosa y continua de 35 cm de ancho hasta el espejo de agua. Su terminación pulido brillante destaca y ofrece un distintivo ornamental para su piscina.`,
    imagen: "./Img/Productos//Vulcano/Cascada Palma 46.webp"
  },
  {
    nombre: "Cloro granulado – Disolución rápida (45 x 1 kg)",
    descripcion: `Cloro granulado Vulclor 45 x 1 kg. Eficaz bactericida de disolución rápida con alto poder desinfectante, ideal para piscinas de fibra de vidrio o pintadas. No incrementa la alcalinidad del agua, se mantiene estable ante la acción del sol y es de alto poder residual.<br>
Dosis: 20g cada 10.000 litros (piscinas residenciales).<br>
Importante: se debe regular el pH del agua entre 7,2 y 7,6 y mantener el nivel de cloro libre por encima de 1,5 ppm. Se recomienda realizar mediciones con el test kit. Aplicar preferentemente por la noche.`,
    imagen: "./Img/Productos//Vulcano/cloro45kg.webp"
  },
  {
    nombre: "Cuchara dosificadora 20g",
    descripcion: `Cuchara dosificadora Vulcano para cloro en polvo o granulado (dosis de 20 g).`,
    imagen: "./Img/Productos//Vulcano/cuchara20g.webp"
  },
  {
    nombre: "Ducha solar para piscina columna gris",
    descripcion: `Ducha solar Vulcano para piscina. Agregá valor a tu piscina gracias a su diseño y estilo moderno, su flor de gran tamaño genera una lluvia agradable y, gracias a su grifería monocomando, la regulación de la temperatura del agua es muy sencilla. Su depósito interno tiene capacidad para almacenar 35L de agua. <br>
Es muy fácil de instalar gracias a su base firme, conexión rápida para manguera de jardín y sus tornillos de fijación incluidos, cuenta con una canilla adicional lavapiés`,
    imagen: "./Img/Productos//Vulcano/Ducha solar para piscina columna gris.webp"
  },
  {
    nombre: "Ducha solar para piscina hoja gris",
    descripcion: `Ducha solar Vulcano para piscina. Agregá valor a tu piscina gracias a su diseño y estilo moderno, su flor de gran tamaño genera una lluvia agradable y, gracias a su grifería monocomando, la regulación de la temperatura del agua es muy sencilla. Su depósito interno tiene capacidad para almacenar 35L de agua. <br>
Es muy fácil de instalar gracias a su base firme, conexión rápida para manguera de jardín y sus tornillos de fijación incluidos, cuenta con una canilla adicional lavapiés.`,
    imagen: "./Img/Productos//Vulcano/Ducha solar para piscina hoja gris.webp"
  },
   {
    nombre: "Escalera Confort 2 ABS",
    descripcion: "Escalera Vulcano 2 escalones. Posee laterales de acero inoxidable y peldaños plásticos. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades que van desde 80 a 100 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 2 ABS.webp"
  },
  {
    nombre: "Escalera Confort 3 ABS",
    descripcion: "Escalera Vulcano 3 escalones. Posee laterales de acero inoxidable y peldaños plásticos. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades que van desde 100 a 130 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 3 ABS.webp"
  },
  {
    nombre: "Escalera Confort 4 ABS",
    descripcion: "Escalera vulcano 4 escalones. Posee laterales de acero inoxidable y peldaños plásticos. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades superiores a 130 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 4 ABS.webp"
  },
  {
    nombre: "Escalera Confort 2 AISI",
    descripcion: "Escalera Vulcano 2 escalones. Posee laterales y peldaños de acero inoxidable. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades que van desde 80 a 100 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 2 AISI.webp"
  },
  {
    nombre: "Escalera Confort 3 AISI",
    descripcion: "Escalera Vulcano 3 escalones. Posee laterales y peldaños de acero inoxidable. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades que van desde 100 a 130 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 3 AISI.webp"
  },
  {
    nombre: "Escalera Confort 4 AISI",
    descripcion: "Escalera Vulcano 4 escalones. Posee laterales y peldaños de acero inoxidable. Incluye 2 anclajes y, según sus dimensiones, es ideal para ser colocada en profundidades superiores a 130 cm.",
    imagen: "./Img/Productos//Vulcano/Escalera Confort 4 AISI.webp"
  },
  {
    nombre: "Hidromasajeador Blanco – Agua ø50 / Aire H 1/2″ (FV)",
    descripcion: "Hidromasajeador Vulcano para piscinas de fibra de vidrio. Fabricado de plástico ABS, posee aro desmontable blanco y conexión para aire (rosca hembra de 1/2″ ). Diseñado especialmente para proporcionar al usuario sensación de bienestar y acción terapéutica; ya sea con un chorro o jet a presión que se puede combinar con aire, mediante un caño con sombrero venturi, o instalando una bomba sopladora.",
    imagen: "./Img/Productos//Vulcano/hidromasajeador.webp"
  },
  {
    nombre: "Ionizador solar ION-100",
    descripcion: "Ionizador solar flotante ION - 100 Vulcano. Ayuda a mantener el agua de tu piscina limpia y libre de algas, usando la energía del sol. Funciona liberando iones de cobre en el agua, los cuales eliminan microorganismos y reducen hasta un 80-90% el uso de cloro. Además, ayuda a eliminar minerales indeseables como el calcio y el hierro. Es un sistema ecológico, seguro y no tóxico. Para usarlo, solo hay que dejarlo flotando en la piscina hasta que alcance el nivel óptimo de iones. Luego, se retira y se vuelve a colocar cuando sea necesario.",
    imagen: "./Img/Productos//Vulcano/ionizador.webp"
  },
  {
    nombre: "LUMIPOOL 4W luz RGB",
    descripcion: "Luminaria subacuática LUMIPOOL Vulcano 4W de luz RGB 12 VCC. Desarrollada con lo último en tecnología, brinda excelente potencia de iluminación con niveles muy bajos de consumo energético. Esta luz, fabricada completamente en policarbonato led, es compacta y de fácil instalación. Características técnicas: Grado de protección IP68, Ángulo de apertura de 150º, Área de iluminación 8 m², Sistema de instalación push in, encastre a presión en pasamuro. Garantía 1 año.",
    imagen: "./Img/Productos//Vulcano/lumipool4w.webp"
  },
  {
    nombre: "Manguera plana de PVC – ø38 mm",
    descripcion: "Manguera plana Vulcano PVC resistente, sección ø38 mm. Manguera tipo manga ideal para usar como desagote de piscina. Opción económica, práctica y de fácil manipulación.",
    imagen: "./Img/Productos//Vulcano/manguerapvc38.webp"
  },
  {
    nombre: "Modulo expansor RGB 180W",
    descripcion: "El Módulo Expansor RGB 180W opera en conjunto con el controlador RGB, permitiendo conectar mayor cantidad de luminarias PowerLED, y controlar todas con un mismo controlador RGB. Es posible conectar varios módulos expansores en paralelo hasta alcanzar la potencia necesaria.",
    imagen: "./Img/Productos//Vulcano/moduloexpansor.webp"
  },
  {
    nombre: "PowerLED 9W luz azul 2,6 m",
    descripcion: "Luminaria subacuática PowerLED Vulcano 9W de luz azul 12 VCC con cable de 2,6 m. Fabricada con materiales de alta calidad, brinda excelente potencia de iluminación con niveles muy bajos de consumo energético. Esta luz es compacta y de fácil instalación, con frente de acero inoxidable AISI 316 pulido. Características técnicas: Grado de protección IP68, Área de iluminación 16 m², Ángulo de apertura 150º, Sistema de instalación push in, encastre a presión en pasamuro. Garantía 1 año.",
    imagen: "./Img/Productos//Vulcano/powerled9w.webp"
  },
  {
    nombre: "",
    descripcion: "Toma superficial de agua Vulcano para piscinas de hormigón con filtro incorporado de gran capacidad. Su función es eliminar las impurezas flotantes en la piscina como hojas, papeles, cabellos, insectos, aceites bronceadores, residuos varios, etc. El skimmer filtra el agua y favorece el movimiento, garantizando así una limpieza correcta de la piscina, ya que la lámina superior del agua es la de menor contenido de cloro y en consecuencia junta mayor cantidad de microorganismos.",
    imagen: "./Img/Productos//Vulcano/skimmercfiltroH.webp"
  },
  {
    nombre: "SuperLED luz RGB 4W",
    descripcion: "Luminaria subacuática SuperLED Vulcano 4W de luz RGB 12 VCC. Con ángulo de apertura de 150°, brinda excelente potencia de iluminación con niveles muy bajos de consumo energético. Esta luz, fabricada completamente en policarbonato de alta calidad, es compacta, delgada y de fácil instalación. Características técnicas: Grado de protección IP68, Área de iluminación 16 m², Sistema de instalación push in, encastre a presión en pasamuro. Garantía 1 año.",
    imagen: "./Img/Productos//Vulcano/superled4w.webp"
  },
   {
    nombre: "SuperLED luz blanca 12W",
    descripcion: `Luminaria subacuática SuperLED Vulcano 12W de luz blanca 12 VCC. Con ángulo de apertura de 170°, brinda excelente potencia de iluminación con niveles muy bajos de consumo energético. Esta luz, fabricada completamente en policarbonato de alta calidad, es compacta, delgada y de fácil instalación.
Características técnicas
• Grado de protección IP68.
• Área de iluminación 38 m².
• Sistema de instalación push in, encastre a presión en pasamuro.
• Garantía 1 año.`,
    imagen: "./Img/Productos//Vulcano/superled12w.webp"
  },
  {
    nombre: "Termómetro flotante bimetálico",
    descripcion: "Termómetro flotante bimetálico Vulcano De 33.5 cm de altura. Permite hacer mediciones en grados Centígrados (Escala °C).",
    imagen: "./Img/Productos//Vulcano/termometro flotantebimetalico.webp"
  },
  {
    nombre: "Termómetro sumergible cilíndrico",
    descripcion: "Termómetro sumergible cilíndrico Vulcano de 17.5 cm de altura. Permite hacer mediciones en grados Fahrenheit y también en grados Centígrados (Escalas °F y °C).",
    imagen: "./Img/Productos//Vulcano/termometro sumergiblecilindrico.webp"
  },
  {
    nombre: "Test de Cobre - 30 tiras",
    descripcion: "Test de cobre Vulcano. Contiene 30 tiras de ensayo de cobre y una tabla de colores que permiten medir el nivel de cobre del agua de la piscina.",
    imagen: "./Img/Productos//Vulcano/testcobre.webp"
  },
  {
    nombre: "Test kit de cloro y pH",
    descripcion: "Test Kit Vulcano para cloro y pH de agua de piscina. Permite realizar un sencillo test para determinar el nivel de pH y cloro del agua, indispensable para el correcto mantenimiento de la calidad de la misma. Los determinadores de cloro y pH se pueden adquirir por separado.",
    imagen: "./Img/Productos//Vulcano/testkit.webp"
  },
  {
    nombre: "Vaina plástica para escalera",
    descripcion: "Vaina plástica Vulcano para sujeción de escalera al piso.",
    imagen: "./Img/Productos//Vulcano/Vaina plástica para escalera.webp"
  },
  {
    nombre: "Varilla plástica corta",
    descripcion: "Varilla plástica corta Vulcano. Fabricada de polipropileno con elastómetro de primera calidad, de 24,3 cm. de largo. Su ensamblado de forma modular permite el desarrollo de una línea de rejillas, la cual destaca por ser antideslizante y agradable a la pisada. Su principal característica radica en su flexibilidad de montaje y en su gran diversidad de usos.",
    imagen: "./Img/Productos//Vulcano/Varilla plástica corta.webp"
  },
  {
    nombre: "Varilla plástica larga",
    descripcion: "Varilla plástica larga Vulcano. Fabricada de polipropileno con elastómero de primera calidad, con un tamaño de 50 cm. de largo; su ensamblado modular permite el desarrollo de una línea de rejillas que destaca por ser antideslizante y agradable a la pisada. Su principal característica radica en la flexibilidad de montaje y diversidad de uso.",
    imagen: "./Img/Productos//Vulcano/Varilla plástica larga.webp"
  },
];

function cargarProducto() {
     container.innerHTML = "";
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.setAttribute("data-descripcion", producto.descripcion);
    div.setAttribute("onclick", "cargar(this)");
    div.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" width="100px" height="100px">
      </div>
      <div class="nombre-producto">${producto.nombre}</div>
    `;
    container.append(div);
  });
}


function cargar(elemento) {
  const seleccion = document.getElementById("seleccion");
  const imgSeleccionada = document.getElementById("img-producto");
  const nombreProducto = document.getElementById("producto");
  const descripSeleccionada = document.getElementById("descripcion");
  const botonWsp = document.getElementById("boton-wsp");

  const img = elemento.querySelector(".imagen-producto img");
  const nombre = elemento.querySelector(".nombre-producto").textContent;
  const descripcion = elemento.getAttribute("data-descripcion");

  imgSeleccionada.src = img.src;
  imgSeleccionada.alt = img.alt;
  nombreProducto.textContent = nombre;
  descripSeleccionada.innerHTML = descripcion || "Próximamente más información sobre " + nombre;
  botonWsp.href = `https://wa.me/+543407467163?text=Hola! Me interesa saber más sobre ${encodeURIComponent(nombre)}`;

  seleccion.style.display = "flex";
   enlaces3.classList.remove('activao');
}

function cerrar() {
  document.getElementById("seleccion").style.display = "none";
}


cargarProducto();


/*--------------------------*/
const abrirBuscador = document.getElementById("abrir-buscador");
const formBusqueda = document.getElementById("form-busqueda");

abrirBuscador.addEventListener("click", () => {
  formBusqueda.classList.toggle("oculto");
  if (!formBusqueda.classList.contains("oculto")) {
    document.getElementById("buscador").focus();
  }
});

document.addEventListener("click", (e) => {
  const isClickInside = formBusqueda.contains(e.target) || abrirBuscador.contains(e.target);

  if (!isClickInside) {
    formBusqueda.classList.add("oculto"); 
    resultado.innerHTML = "";
    document.getElementById("container").style.display = "grid"; 
  }
});




const busqueda = () => {
  document.getElementById("seleccion").style.display = "none";
  const buscarproducto = buscador.value.toLowerCase();
  resultado.innerHTML = "";

  if (buscarproducto === "") {
    cargarProducto(); 
    return;
  }

  const productofiltrado = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(buscarproducto)
  );


  if (productofiltrado.length === 0) {
    const mensaje = document.createElement("div");
    mensaje.classList.add("no-resultados");
    mensaje.textContent = "No se encontraron productos.";
    resultado.appendChild(mensaje);
    return;
  }

  productofiltrado.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.setAttribute("data-descripcion", producto.descripcion);
    div.setAttribute("onclick", "cargar(this)");
    div.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" width="100px" height="100px">
      </div>
      <div class="nombre-producto">${producto.nombre}</div>
    `;
    resultado.appendChild(div);
  });
};

buscador.addEventListener("input", busqueda);


document.addEventListener("click", (e) => {
  if (!resultado.contains(e.target) && !buscador.contains(e.target)) {
    resultado.innerHTML = "";
  }
});


const paginacion = document.getElementById("paginacion");


let paginaActual = 1;
const productosPorPagina = 12;

function mostrarProductos(pagina, lista = productos) {
  container.innerHTML = "";
  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = lista.slice(inicio, fin);

  productosPagina.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.setAttribute("data-descripcion", producto.descripcion);
    div.setAttribute("onclick", "cargar(this)");
    div.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" width="100px" height="100px">
      </div>
      <div class="nombre-producto">${producto.nombre}</div>
    `;
    container.appendChild(div);
  });

  crearPaginacion(lista);
}

function crearPaginacion(lista) {
  paginacion.innerHTML = "";
  const totalPaginas = Math.ceil(lista.length / productosPorPagina);
  const maxBotones = 3;
  let inicio = Math.max(1, paginaActual - 1);
  let fin = Math.min(inicio + maxBotones - 1, totalPaginas);

  if (fin - inicio < maxBotones - 1 && inicio > 1) {
    inicio = Math.max(1, fin - maxBotones + 1);
  }

  if (paginaActual > 1) {
    const anteriorBtn = document.createElement("button");
    anteriorBtn.textContent = "◀ Anterior";
    anteriorBtn.addEventListener("click", () => {
      paginaActual--;
      mostrarProductos(paginaActual);
    });
    paginacion.appendChild(anteriorBtn);
  }

  for (let i = inicio; i <= fin; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === paginaActual) btn.classList.add("activo");
    btn.addEventListener("click", () => {
      paginaActual = i;
      mostrarProductos(paginaActual);
    });
    paginacion.appendChild(btn);
  }

  if (fin < totalPaginas) {
    const puntos = document.createElement("span");

    puntos.style.margin = "0 5px";
    paginacion.appendChild(puntos);

    const siguienteBtn = document.createElement("button");
    siguienteBtn.textContent = "Siguiente ▶";
    siguienteBtn.addEventListener("click", () => {
      if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarProductos(paginaActual);
      }
    });
    paginacion.appendChild(siguienteBtn);
  }
}

function cargar(elemento) {
  const seleccion = document.getElementById("seleccion");
  const imgSeleccionada = document.getElementById("img-producto");
  const nombreProducto = document.getElementById("producto");
  const descripSeleccionada = document.getElementById("descripcion");
  const botonWsp = document.getElementById("boton-wsp");

  const img = elemento.querySelector(".imagen-producto img");
  const nombre = elemento.querySelector(".nombre-producto").textContent;
  const descripcion = elemento.getAttribute("data-descripcion");

  imgSeleccionada.src = img.src;
  imgSeleccionada.alt = img.alt;
  nombreProducto.textContent = nombre;
  descripSeleccionada.innerHTML = descripcion || "Próximamente más información sobre " + nombre;
  botonWsp.href = `https://wa.me/+543407467163?text=Hola! Me interesa saber más sobre ${encodeURIComponent(nombre)}`;
  seleccion.style.display = "flex";
  document.getElementById("whatsapp-btn").style.display = "none";
}

function cerrar() {
  document.getElementById("seleccion").style.display = "none";
  document.getElementById("whatsapp-btn").style.display = "block";
}

mostrarProductos(paginaActual);

