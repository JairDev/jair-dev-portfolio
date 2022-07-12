import workCoin from "../assets/coin-tablet.png";
import memory from "../assets/memory-tablet.png";
import workDessert from "../assets/desert-tablet.png";
import imgCode from "../assets/personal-projects-code-s.png";
import imgCodeHoc from "../assets/personal-projects-code-hoc.png";
import room from "../assets/room-homepage.png";
import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";

export const socialMedia = [
  {
    name: "Github",
    iconClass: "icon-github",
    source: "https://github.com/JairDev",
  },
  {
    name: "Linkedin",
    iconClass: "icon-linkedin",
    source: "https://www.linkedin.com/in/frontend-alfredo-moscoso/",
  },
  {
    name: "Twitter",
    iconClass: "icon-twitter",
    source: "https://twitter.com/JairDevep",
  },
  { name: "Gmail", iconClass: "icon-mail4", source: "https://gmail.com" },
];

export const skills = [
  { name: "ReactJs", iconClass: "icon-react" },
  { name: "JavaScript", iconClass: "icon-javascript" },
  { name: "CSS3", iconClass: "icon-css3" },
  { name: "HTML5", iconClass: "icon-html-five" },
];

export const tools = [
  { name: "Git", iconClass: "icon-git" },
  { name: "Sass", iconClass: "icon-sass" },
  { name: "Photoshop", iconClass: "icon-adobephotoshop" },
];

export const users = [
  {
    name: "Alfredo",
    lastName: "Moscoso",
    occupation: "FrontEnd-Developer",
    photo: "img",
  },
];

export const svgIcons = [
  { name: "React", svg: bxlReact },
  { name: "Javascript", svg: bxlJavascript },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
];

export const personalProjects = [
  {
    id: "id1",
    name: "Coin Market App",
    imgSrcApp: workCoin,
    imgCode: imgCodeHoc,
    linkGit: "https://github.com/JairDev/coin-market-info-",
    linkDemo: "https://coin-market-info.vercel.app/",
    dataDescription: [
      {
        paragraph: `React y otras librerías similares están pensadas para facilitar la creación de interfaces web, móvil, etc;
        aumentando la productividad, al acelerar el proceso de desarrollo.`,
      },
      {
        paragraph: `Nos permite, por ejemplo, reutilizar componentes de interfaz en nuestros sitios web,
        en esta aplicación puedo reutilizar un componente input a lo largo de mi sitio web, en este caso,
        se utiliza para buscar una criptomoneda en el gráfico o en otra sección de la web para buscar
        noticias referentes a las criptomonedas.`,
      },
      // {
      //   paragraph: `En esta aplicación que consiste en mostrar criptomonedas en tendencia, buscar
      //   criptomonedas de tu preferencia o leer noticias actualizadas referente al mundo crypto, tenía
      //   dos componentes similares en cuanto a funcionalidad y la manera en que dependían de un valor para
      //   mostrar datos en la interfaz.`,
      // },
      // {
      //   paragraph: `Un primer componente, que renderiza la tabla con información sobre monedas, depende de
      //   la entrada del usuario y de una función que toma esos datos, actualiza una variable de estado
      //   y se renderiza la moneda.`,
      // },
      // {
      //   paragraph: `Un segundo componente, que renderiza las noticias actuales sobre criptomonedas, que también
      //   depende de una entrada del usuario y la misma funcionalidad que el primer componente. En la documentación
      //   de React, se habla de los componentes de orden superior, recordemos que React es una librería construida
      //   en JavaScript, donde existen las funciones de orden superior, (funciones que reciben otras funciones
      //   como argumentos)`,
      // },
      // {
      //   paragraph: `En React un componente de orden superior, es una función que recibe un componente como
      //   argumento y devuelve un nuevo componente. Un componente de orden superior me permite definir estos
      //   datos y/o funciones en un mismo lugar, para luego compartirlos con otros componentes, reutilizando
      //   esa función y también poder crear flexibilidad en el código. (Todo esto ocurrió en una etapa posterior de
      //   refactorización)`,
      // },
      // {
      //   paragraph: `Como pueden ver en este fragmento, el componente de orden superior devuelve un nuevo
      //   componente, transformado mediante las props (propiedades) que se le pasan. En este caso, comparten
      //   la misma variable de estado y la función, pero su label es diferente.`,
      // },
    ],
  },
  {
    id: "id2",
    name: "Tasty dessert",
    imgSrcApp: workDessert,
    imgCode: imgCode,
    linkGit: "https://github.com/JairDev/hot-food-app",
    linkDemo: "https://tastypie.netlify.app/",
    dataDescription: [
      {
        paragraph: `Realizando esta app, pude ver algunas particularidades de React, por ejemplo, el trabajar
        con formularios y entradas de usuario.`,
      },
      {
        paragraph: `React nos proporciona una técnica llamada "componentes controlados",
        recordemos que en React para actualizar algún elemento de la interfaz, lo hacemos actualizando el estado,
        React al "notar" un cambio en el estado actualiza la interfaz en consecuencia.`,
      },
      {
        paragraph: `
        Lo que hacemos entonces es determinar que el estado de React sea la única "fuente de verdad", 
        de esta manera los componentes que rendericen un formulario, tienen el control sobre lo que pasa 
        en ese formulario. 
        `,
      },
    ],
  },
  // {
  //   name: "Recipes",
  //   imgSrcApp: tablet,
  //   linkGit: "https://github.com/JairDev/recipe-app",
  //   linkDemo: "https://tasterecipes.netlify.com/",
  //   description:
  //     "Encuentra las mejores recetas, guarda tu favorita o crea tu propia receta",
  // },
  {
    name: "Memory",
    imgSrcApp: memory,
    linkGit: "https://github.com/JairDev/memory-game",
    linkDemo: "https://memorybrain.netlify.com/",
    dataDescription: [
      {
        paragraph: `Desafía tu memoria, con el juego de memoria mas desafiante jamas creado.`,
      },
    ],
  },
  {
    name: "Timer",
    imgSrcApp: memory,
    linkGit: "https://github.com/JairDev/training-timer-and-chronometer",
    linkDemo: "https://trainingtimerapp.netlify.com/",
    dataDescription: [
      {
        paragraph: `App para llevar el control de tiempo y series en tus ejercicios.`,
      },
    ],
  },
];

export const challenges = [
  {
    name: "Room homepage",
    imgSrcApp: room,
    linkGit: "https://github.com/JairDev/room-homepage",
    linkDemo: "https://coolrooms.netlify.app/",
    desafio: "Construir página de inicio de comercio electrónico",
    dificultad: "Intermedio",
    fuente: "https://www.frontendmentor.io/",
  },
];
