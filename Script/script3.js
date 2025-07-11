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
    nombre: "Acople NORYL (aro suplemento)",
    descripcion: `Acople NORYL (aro suplemento).
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Acople NORYL (aro suplemento).webp",
  },
  {
    nombre: "Arandela AISI para anclaje",
    descripcion: `Arandela AISI para anclaje. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Arandela AISI para anclaje.webp"
  },
  {
    nombre: "Arandela compensación 0.50  0.75  1 HP",
    descripcion: `Arandela compensación 0.50 / 0.75 / 1 HP.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Arandela compensación 0.50  0.75  1 HP.webp"
  },
  {
    nombre: "Arandela plástica para multiválvula",
    descripcion: `Arandela plástica ø43 mm para multiválvula.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Arandela plástica para multiválvula.webp"
  },
  {
    nombre: "Arandela plástica",
    descripcion: `Arandela plástica.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Arandela plástica.webp"
  },
  {
    nombre: "Aro vista blanco para hidrojet",
    descripcion: `Aro vista blanco para hidrojet.
Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Aro vista blanco para hidrojet.webp"
  },
  {
    nombre: "Aro vista blanco para pulsador",
    descripcion: `Aro vista blanco para pulsador.
Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Aro vista blanco para pulsador.webp"
  },
  {
    nombre: "Aro vista cromado para hidrojet",
    descripcion: `Aro vista cromado para hidrojet.
Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Aro vista cromado para hidrojet.webp"
  },
  {
    nombre: "Aro vista cromado para pulsador",
    descripcion: `Aro vista cromado para pulsador.
Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Aro vista cromado para pulsador.webp"
  },
  {
    nombre: "Aro vista para luminaria",
    descripcion: `Aro vista para luminaria.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Aro vista para luminaria.webp"
  },
  {
    nombre: "Base AISI pulida para anclaje",
    descripcion: `Base AISI pulida para anclaje.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Base AISI pulida para anclaje.webp"
  },
  {
    nombre: "Base de filtro",
    descripcion: `Base de filtro.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Base de filtro.webp"
  },
  {
    nombre: "Base porta lámpara para adosar",
    descripcion: `Base porta lámpara para adosar.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Base porta lámpara para adosar.webp"
  },
   {
    nombre: "Boquilla combinada 1 12″ / 1 14″",
    descripcion: `Boquilla combinada 1 1/2 - 1 1/4.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Boquilla combinada 1 12″ – 1 14″.webp"
  },
  {
    nombre: "Boquilla espiga 1 12″",
    descripcion: `Boquilla espiga 1 1/2. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Boquilla espiga 1 12″.webp"
  },
  {
    nombre: "Boquilla lisa 1 12″",
    descripcion: `Boquilla lisa 1 1/4. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Boquilla lisa 1 12″.webp"
  },
  {
    nombre: "Boquilla lisa 1 14″",
    descripcion: `Boquilla lisa 1 1/4. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Boquilla lisa 1 14″.webp"
  },
  {
    nombre: "Botón para pulsador blanco",
    descripcion: `Botón para pulsador blanco. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Botón para pulsador blanco.webp"
  },
  {
    nombre: "Botón para pulsador cromado",
    descripcion: `Botón para pulsador cromado. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Botón para pulsador cromado.webp"
  },
  {
    nombre: "Brida de aluminio",
    descripcion: `Brida de aluminio (Motor BAS 0.33HP/ 0.50HP - Monofásico). Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Brida de aluminio.webp"
  },
  {
    nombre: "Buje H 1 12″ para roscar",
    descripcion: `Buje H 1 1/2 para roscar. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Buje H 1 12″ para roscar.webp"
  },
  {
    nombre: "Buje H ø50 para pegar",
    descripcion: `Buje H ø50 para pegar. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Buje H ø50 para pegar.webp"
  },
  {
    nombre: "Cabezal para multiválvula 6 vías 1 12″",
    descripcion: `Cabezal para multiválvula 6 vías 1 1/2. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cabezal para multiválvula 6 vías 1 12″.webp"
  },
   {
    nombre: "Caja de conexiones BAC Monofásica",
    descripcion: `Caja de conexiones BAC Monofásica. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Caja de conexiones BAC Monofásica.webp"
  },
  {
    nombre: "Canasto ABS 4″",
    descripcion: `Canasto ABS 4″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Canasto ABS 4″.webp"
  },
  {
    nombre: "Canasto BAE 5L",
    descripcion: `Canasto BAE 5L. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Canasto BAE 5L.webp"
  },
  {
    nombre: "Canasto BAP",
    descripcion: `Canasto BAP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Canasto BAP.webp"
  },
  {
    nombre: "Canasto BAS",
    descripcion: `Canasto BAS. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Canasto BAS.webp"
  },
  {
    nombre: "Canasto BAT",
    descripcion: `Canasto BAT. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Canasto BAT.webp"
  },
  {
    nombre: "Canasto skimmer con manija",
    descripcion: `Canasto skimmer con manija. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Canasto skimmer con manija.webp"
  },
  {
    nombre: "Capacitor 12.5 MF 400V",
    descripcion: `Capacitor 12.5 MF 400V.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Capacitor 12.5 MF 400V.webp"
  },
  {
    nombre: "Capacitor 14 MF 400V",
    descripcion: `Capacitor 14 MF 400V.
Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Capacitor 14 MF 400V.webp"
  },
  {
    nombre: "Cepillo con soporte 35 cm",
    descripcion: `Cepillo con soporte 35 cm. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cepillo con soporte 35 cm.webp"
  },
  {
    nombre: "Cepillo con soporte 48 cm",
    descripcion: `Cepillo con soporte 48 cm. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cepillo con soporte 48 cm.webp"
  },
  {
    nombre: "Cepillo limpiafondo triangular",
    descripcion: `Cepillo limpiafondo triangular. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cepillo limpiafondo triangular.webp"
  },
   {
    nombre: "Cepillo para electrodo de ionizador",
    descripcion: `Cepillo para electrodo de ionizador. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cepillo para electrodo de ionizador.webp"
  },
  {
    nombre: "Cjto. prensacable para base luminaria",
    descripcion: `Cjto. prensacable para base luminaria LED. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cjto. prensacable para base luminaria.webp"
  },
  {
    nombre: "Cjto. Tornillo para grampa 10″",
    descripcion: `Cjto. Tornillo para grampa 10″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cjto. Tornillo para grampa 10″.webp"
  },
  {
    nombre: "Clip",
    descripcion: `Clip. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Clip.webp"
  },
  {
    nombre: "Colector para filtro VC-10",
    descripcion: `Colector para filtro VC-10. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Colector para filtro VC-10.webp"
  },
  {
    nombre: "Colector para filtro VC-100  VC-200 R",
    descripcion: `Colector para filtro VC-100 / VC-200 R. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Colector para filtro VC-100  VC-200 R.webp"
  },
  {
    nombre: "Contramarco para boca ancha",
    descripcion: `Contramarco para boca ancha. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Contramarco para boca ancha.webp"
  },
  {
    nombre: "Contramarco para boca chica",
    descripcion: `Contramarco para boca chica. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Contramarco para boca chica.webp"
  },
  {
    nombre: "Contratuerca para hidrojet",
    descripcion: `Contratuerca para hidrojet. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Contratuerca para hidrojet.webp"
  },
  {
    nombre: "Cubre ventilador plástico para motor",
    descripcion: `Cubre ventilador plástico para motor. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Cubre ventilador plástico para motor.webp"
  },
  {
    nombre: "Cuerpo 2 vías con boca para roscar",
    descripcion: `Cuerpo 2 vías con boca para roscar. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.
Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.`,
    imagen: "./Img/Productos/Repuestos/Cuerpo 2 vías con boca para roscar.webp"
  },
  {
    nombre: "Cuerpo autocebante BAS",
    descripcion: `Cuerpo autocebante BAS. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Cuerpo autocebante BAS.webp"
  },
  {
    nombre: "Cuerpo BAC",
    descripcion: `Cuerpo BAC. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.`,
    imagen: "./Img/Productos/Repuestos/Cuerpo BAC.webp"
  },
   {
    nombre: "Cuerpo BAD 0.50 / 0.75 / 1.00",
    descripcion: "Cuerpo BAD 0.50 / 0.75 / 1.00. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo BAD 0.50  0.75  1.00.webp"
  },
  {
    nombre: "Cuerpo de anclaje ducha",
    descripcion: "Cuerpo de anclaje ducha. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Cuerpo de anclaje ducha.webp"
  },
  {
    nombre: "Cuerpo de caja de conexión – Monofásico",
    descripcion: "Cuerpo de caja de conexión - Monofásico. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo de caja de conexión – Monofásico.webp"
  },
  {
    nombre: "Cuerpo fundición gris ECM 0.50HP",
    descripcion: "Cuerpo fundición gris ECM 0.50HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo fundición gris ECM 0.50HP.webp"
  },
  {
    nombre: "Cuerpo fundición gris ECM 0.75  1.00HP",
    descripcion: "Cuerpo fundición gris ECM 0.75 / 1.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo fundición gris ECM 0.75  1.00HP.webp"
  },
  {
    nombre: "Cuerpo para hidrojet",
    descripcion: "Cuerpo para hidrojet. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo para hidrojet.webp"
  },
  {
    nombre: "Cuerpo para hidromasajeador",
    descripcion: "Cuerpo para hidromasajeador. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Cuerpo para hidromasajeador.webp"
  },
  {
    nombre: "Cuerpo para propulsor",
    descripcion: "Cuerpo para propulsor. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo para propulsor.webp"
  },
  {
    nombre: "Cuerpo para regulador",
    descripcion: "Cuerpo para regulador. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo para regulador.webp"
  },
  {
    nombre: "Cuerpo para succión antivortex",
    descripcion: "Cuerpo para succión antivortex. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo para succión antivortex.webp"
  },
  {
    nombre: "Cuerpo virola con aro para pegar",
    descripcion: "Cuerpo virola con aro para pegar. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Cuerpo virola con aro para pegar.webp"
  },
  {
    nombre: "Cuerpo virola con aro para roscar",
    descripcion: "Cuerpo virola con aro para roscar. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Cuerpo virola con aro para roscar.webp"
  },
  {
    nombre: "Cupla de conexión",
    descripcion: "Cupla de conexión. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Cupla de conexión.webp"
  },
  {
    nombre: "Difusor BAC",
    descripcion: "Difusor BAC. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Difusor BAC.webp"
  },
  {
    nombre: "Difusor BAE / BAP / BAS 0.33",
    descripcion: "Difusor BAE / BAP / BAS 0.33. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Difusor BAE  BAP  BAS 0.33.webp"
  },
  {
    nombre: "Electrodo de cobre para ionizador solar ION-100",
    descripcion: "Electrodo de cobre para ionizador solar ION-100. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Electrodo de cobre para ionizador solar ION-100.webp"
  },
  {
    nombre: "Estator bobinado",
    descripcion: "Estator bobinado (Consultar tipo de conexión y potencia). Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Estator bobinado 1.00HP – Monofásico.webp"
  },
  {
    nombre: "Etiqueta 6 vías 1 1/2″",
    descripcion: "Etiqueta 6 vías 1 1/2. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Etiqueta 6 vías 1 12″.webp"
  },
  {
    nombre: "Filtro para ionizador solar ION-100",
    descripcion: "Filtro para ionizador solar ION-100. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Filtro para ionizador solar ION-100.webp"
  },
  {
    nombre: "Grampa 10″ sin ganchos",
    descripcion: "Grampa 10″ sin ganchos. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Grampa 10″ sin ganchos.webp"
  },
  {
    nombre: "Horqueta con clip",
    descripcion: "Horqueta con clip. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Horqueta con clip.webp"
  },
  {
    nombre: "Horquilla con seguro",
    descripcion: "Horquilla con seguro. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Horquilla con seguro.webp"
  },
  {
    nombre: "Impulsor BAC 2.00HP",
    descripcion: "Impulsor BAC 2.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAC 2.00HP.webp"
  },
  {
    nombre: "Impulsor BAE  BAF  BAP  BAS 0.33HP",
    descripcion: "Impulsor BAE / BAF / BAP / BAS 0.33HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAE  BAF  BAP  BAS 0.33HP.webp"
  },
  {
    nombre: "Impulsor BAE  BAP  BAS  BAT 0.50HP",
    descripcion: "Impulsor BAE / BAP / BAS / BAT 0.50HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAE  BAP  BAS  BAT 0.50HP.webp"
  },
  {
    nombre: "Impulsor BAE  BAP 1.25HP",
    descripcion: "Impulsor BAE / BAP 1.25HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAE  BAP 1.25HP.webp"
  },
  {
    nombre: "Impulsor BAE  BAT  BAP 0.75HP",
    descripcion: "Impulsor BAE / BAT / BAP 0.75HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAE  BAT  BAP 0.75HP.webp"
  },
  {
    nombre: "Impulsor BAE  BAT  BAP 1.00HP",
    descripcion: "Impulsor BAE / BAT / BAP 1.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor BAE  BAT  BAP 1.00HP.webp"
  },
  {
    nombre: "Impulsor ECM 0.50HP",
    descripcion: "Impulsor ECM 0.50HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor ECM 0.50HP.webp"
  },
  {
    nombre: "Impulsor ECM 0.75HP",
    descripcion: "Impulsor ECM 0.75HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor ECM 0.75HP.webp"
  },
  {
    nombre: "Impulsor ECT 1.00HP",
    descripcion: "Impulsor ECT 1.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Impulsor ECT 1.00HP.webp"
  },
  {
    nombre: "Junta blanca 2 12″",
    descripcion: "Junta blanca 2 1/2″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta blanca 2 12″.webp"
  },
  {
    nombre: "Junta blanca 2″",
    descripcion: "Junta blanca 2 1/2″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta blanca 2.webp"
  },
  {
    nombre: "Junta p/ toma de fondo liner",
    descripcion: "Junta p/ toma de fondo liner. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta p toma de fondo liner.webp"
  },
  {
    nombre: "Junta cuerpo filtro",
    descripcion: "Junta cuerpo filtro. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta cuerpo filtro.webp"
  },
  {
    nombre: "Junta de goma para tabla",
    descripcion: "Junta de goma para tabla. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta de goma para tabla.webp"
  },
  {
    nombre: "Junta de goma para tapa visora BAT",
    descripcion: "Junta de goma para tapa visora BAT. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta de goma para tapa visora BAT.webp"
  },
  {
    nombre: "Junta estrella 1 12″",
    descripcion: "Junta estrella 1 12″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta estrella 1 12″.webp"
  },
  {
    nombre: "Junta estrella 2″",
    descripcion: "Junta estrella 2″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta estrella 2″.webp"
  },
  {
    nombre: "Junta para boca ancha",
    descripcion: "Junta para boca ancha. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta para boca ancha.webp"
  },
  {
    nombre: "Junta para lente luminaria",
    descripcion: "Junta para lente luminaria. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Junta para lente luminaria.webp"
  },
  {
    nombre: "Junta para propulsor",
    descripcion: "Junta para propulsor. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Junta para propulsor.webp"
  },
  {
    nombre: "Junta para regulador de aire",
    descripcion: "Junta para regulador de aire. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Junta para regulador de aire.webp"
  },
  {
    nombre: "Junta para tapón de bronce",
    descripcion: "Junta para tapón de bronce. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Junta para tapón de bronce.webp"
  },
   {
    nombre: "Junta rotor cónico",
    imagen: "./Img/Productos/Repuestos/Junta rotor cónico.webp",
    descripcion: "Junta rotor cónico. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Junta skimmer boca chica",
    imagen: "./Img/Productos/Repuestos/Junta skimmer boca chica.webp",
    descripcion: "Junta skimmer boca chica. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Junta tapa filtro",
    imagen: "./Img/Productos/Repuestos/Junta tapa filtro.webp",
    descripcion: "Junta tapa filtro. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Junta tubo visor",
    imagen: "./Img/Productos/Repuestos/Junta tubo visor.webp",
    descripcion: "Junta tubo visor. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Lente estriado",
    imagen: "./Img/Productos/Repuestos/Lente estriado.webp",
    descripcion: "Lente estriado. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Lente rugoso",
    imagen: "./Img/Productos/Repuestos/Lente rugoso.webp",
    descripcion: "Lente rugoso. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Llave de paso para ducha",
    imagen: "./Img/Productos/Repuestos/Llave de paso para ducha.webp",
    descripcion: "Llave de paso para ducha. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Manguito con clip",
    imagen: "./Img/Productos/Repuestos/Manguito con clip.webp",
    descripcion: "Manguito con clip. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Manija selectora 3 vías  6 vías",
    imagen: "./Img/Productos/Repuestos/Manija selectora 3 vías  6 vías.webp",
    descripcion: "Manija selectora 3 vías / 6 vías. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Marco 20 cm con regulador de caudal",
    imagen: "./Img/Productos/Repuestos/Marco 20 cm con regulador de caudal.webp",
    descripcion: "Marco 20 cm con regulador de caudal. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Marco 38 cm con regulador de caudal",
    imagen: "./Img/Productos/Repuestos/Marco 38 cm con regulador de caudal.webp",
    descripcion: "Marco 38 cm con regulador de caudal. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Marco para boca ancha",
    imagen: "./Img/Productos/Repuestos/Marco para boca ancha.webp",
    descripcion: "Marco para boca ancha. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Marco vista skimmer boca ancha – hormigón",
    imagen: "./Img/Productos/Repuestos/Marco vista skimmer boca ancha – hormigón.webp",
    descripcion: "Marco vista skimmer boca ancha - hormigón. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes."
  },
  {
    nombre: "Multiválvula 6 vías – 1 ½»",
    descripcion: "Multiválvula 6 vías – 1 ½» c/buje. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Multiválvula 6 vías – 1 ½».webp"
  },
  {
    nombre: "Módulo extensor para boca skimmer",
    descripcion: "Módulo extensor para boca skimmer. Permite extender 130 mm el largo de las bocas de los skimmers, es opcional y se adquiere por separado. Para extender el skimmer bocha chical el módulo puede ser adicionado por un instalador. En el caso de el skimmer bocha ancha se debe solicitar a fabrica el armado del mismos.",
    imagen: "./Img/Productos/Repuestos/Módulo extensor para boca skimmer.webp"
  },
  {
    nombre: "Módulo extensor para cuello",
    descripcion: "Módulo extensor para cuello. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Módulo extensor para cuello.webp"
  },
  {
    nombre: "O’Ring 1 12″",
    descripcion: "O'Ring 1 1/2″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring 1 12″.webp"
  },
  {
    nombre: "O'Ring difusor",
    descripcion: "O'Ring difusor. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/O’Ring difusor.webp"
  },
  {
    nombre: "O’Ring para aspiración multiválvula 3 vías",
    descripcion: "O'Ring para aspiración multiválvula 3 vías. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring para aspiración multiválvula 3 vías.webp"
  },
  {
    nombre: "O’Ring para buje",
    descripcion: "O'Ring para cuerpo intermedio. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring para buje.webp"
  },
  {
    nombre: "O’Ring para caja de conexiones",
    descripcion: "O'Ring para caja de conexiones. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring para caja de conexiones.webp"
  },
  {
    nombre: "O’Ring para cuerpo ECM 0.75  1.00HP",
    descripcion: "O'Ring para cuerpo ECM 0.75 / 1.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/O’Ring para cuerpo ECM 0.75  1.00HP.webp"
  },
  {
    nombre: "O’Ring para perilla dosificador",
    descripcion: "O'Ring para perilla dosificador. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring para perilla dosificador.webp"
  },
  {
    nombre: "O’Ring para retén rotor",
    descripcion: "O'Ring retén para rotor mv 6 vías. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/O’Ring para retén rotor.webp"
  },
  {
    nombre: "Perno AISI manija selectora",
    descripcion: "Perno AISI manija selectora. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Perno AISI manija selectora.webp"
  },
  {
    nombre: "Perno de horqueta",
    descripcion: "Perno de horqueta. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Perno de horqueta.webp"
  },
  {
    nombre: "Perno horquilla",
    descripcion: "Perno horquilla. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Perno horquilla.webp"
  },
  {
    nombre: "Perno manguito AISI",
    descripcion: "Perno manguito AISI. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Perno manguito AISI.webp"
  },
  {
    nombre: "Pico esférico blanco para hidrojet",
    descripcion: "Pico esférico blanco para hidrojet. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Pico esférico blanco para hidrojet.webp"
  },
  {
    nombre: "Pico esférico cromado para hidrojet",
    descripcion: "Pico esférico cromado para hidrojet. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Pico esférico cromado para hidrojet.webp"
  },
  {
    nombre: "Regatón de PVC",
    descripcion: "Regatón de PVC. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Regatón de PVC.webp"
  },
  {
    nombre: "Regatón plástico",
    descripcion: "Regatón de PVC. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Regatón plástico.webp"
  },
  {
    nombre: "Regulador de caudal con pernos",
    descripcion: "Regulador de caudal con pernos. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Regulador de caudal con pernos.webp"
  },
  {
    nombre: "Rejilla superior",
    descripcion: "Rejilla superior. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Rejilla superior.webp"
  },
  {
    nombre: "Resorte AISI 6 vías",
    descripcion: "Resorte AISI 6 vías. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.\nLas piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Resorte AISI 6 vías.webp"
  },
   {
    nombre: "Rodamiento 2.00  3.00HP",
    descripcion: "Rodamiento 2.00 / 3.00HP. Esta pieza es un repuesto original, directo de fábrica. Está diseñada y probada para brindar seguridad, rendimiento y confiabilidad a nuestros clientes. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo.",
    imagen: "./Img/Productos/Repuestos/Rodamiento 2.00  3.00HP.webp"
  },
  {
    nombre: "Rotor multiválvula 3 vías",
    descripcion: "Rotor multiválvula 3 vías. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Rotor multiválvula 3 vías.webp"
  },
  {
    nombre: "Rotor multiválvula 6 vías 1 12″",
    descripcion: "Rotor multiválvula 6 vías 1 12″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Rotor multiválvula 6 vías 1 12″.webp"
  },
  {
    nombre: "Rotor multiválvula 6 vías 2″",
    descripcion: "Rotor multiválvula 6 vías 2″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Rotor multiválvula 6 vías 2″.webp"
  },
  {
    nombre: "Ruedas con perno 35 mm",
    descripcion: "Ruedas con perno 35 mm. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Ruedas con perno 35 mm.webp"
  },
  {
    nombre: "Ruedas con perno 48 mm83 mm",
    descripcion: "Ruedas con perno 48 mm83 mm. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Ruedas con perno 48 mm83 mm.webp"
  },
  {
    nombre: "Ruedita plástica",
    descripcion: "Ruedita plástica. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Ruedita plástica.webp"
  },
  {
    nombre: "Sello mecánico con pista cerámica",
    descripcion: "Sello mecánico con pista cerámica. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Sello mecánico con pista cerámica.webp"
  },
  {
    nombre: "",
    descripcion: ". Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa aluminio para motor carcasa 71.webp"
  },
  {
    nombre: "Tapa caja conexión para motores de bombas BAE",
    descripcion: "Tapa caja conexión para motores de bombas BAE. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa caja conexión para motores de bombas BAE.webp"
  },
  {
    nombre: "Tapa cuadrada",
    descripcion: "Tapa cuadrada. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa cuadrada.webp"
  },
  {
    nombre: "Tapa para dosificador de cloro",
    descripcion: "Tapa para dosificador de cloro. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa para dosificador de cloro.webp"
  },
   {
    nombre: "Tapa para toma antiremolino Hº",
    descripcion: "Tapa para toma antiremolino Hº. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa para toma antiremolino Hº.webp"
  },
  {
    nombre: "Tapa para toma antiremolino – Liner",
    descripcion: "Tapa para toma antiremolino – Liner. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa para toma antiremolino – Liner.webp"
  },
  {
    nombre: "Tapa plástica para caja de conexión",
    descripcion: "Tapa plástica para caja de conexión. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa plástica para caja de conexión.webp"
  },
  {
    nombre: "Tapa visora BAC  BAP",
    descripcion: "Tapa visora BAC  BAP. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa visora BAC  BAP.webp"
  },
  {
    nombre: "Tapa visora BAT",
    descripcion: "Tapa visora BAT. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tapa visora BAT.webp"
  },
  {
    nombre: "Tornillo para ionizador solar ION-100 – Plástico",
    descripcion: "Tornillo para ionizador solar ION-100 – Plástico. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tornillo para ionizador solar ION-100 – Plástico.webp"
  },
  {
    nombre: "Tuerca para tapa visora BAE  BAF",
    descripcion: "Tuerca para tapa visora BAE  BAF. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tuerca para tapa visora BAE  BAF.webp"
  },
  {
    nombre: "Tuerca superior 1 12″",
    descripcion: "Tuerca superior 1 12″. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tuerca superior 1 12″.webp"
  },
  {
    nombre: "Tuerca tapa dosificador",
    descripcion: "Tuerca tapa dosificador. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Tuerca tapa dosificador.webp"
  },
  {
    nombre: "Ventilador para motor carcasa 80 NAC",
    descripcion: "Ventilador para motor carcasa 80 NAC. Esta pieza es un repuesto original, directo de fábrica. El empleo de repuestos ajenos a la marca afecta la calidad y desempeño del mismo. Las piezas están diseñadas y probadas para brindar seguridad, rendimiento y confiabilidad a nuestros clientes.",
    imagen: "./Img/Productos/Repuestos/Ventilador para motor carcasa 80 NAC.webp"
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


/*--------------------------

const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado"); 


const busqueda = () =>{
    const buscarproducto = buscador.value.toLowerCase();
    const productofiltrado = productos.filter((producto) => producto.nombre.toLowerCase().startsWith
    (buscarproducto));

    productofiltrado.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        resultado.appendChild(li);
    });
};

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

const buscador = document.getElementById("buscador");
const botonBusqueda = document.querySelector(".boton-busqueda");
const resultado = document.getElementById("resultado");

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
