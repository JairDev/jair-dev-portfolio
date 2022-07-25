import workCoin from "../assets/coin-mac.webp";
import workDessert from "../assets/desert-mac.webp";
import memory from "../assets/memory-mac.webp";
import room from "../assets/room-mac.webp";
import todo from "../assets/todo-mac.webp";
import timer from "../assets/timer-mac.webp";
import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";
import styledcomponentsIcon from "@iconify/icons-file-icons/styledcomponents";
import reduxFill from "@iconify/icons-akar-icons/redux-fill";

export const svgIcons = [
  { name: "React", svg: bxlReact },
  { name: "Javascript", svg: bxlJavascript },
  { name: "Redux", svg: reduxFill },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
  { name: "Styled Components", svg: styledcomponentsIcon },
];

export const personalProjects = [
  {
    id: "id1",
    name: "Coin Market App",
    imgSrcApp: workCoin,
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
    ],
  },
  {
    id: "id2",
    name: "Tasty dessert",
    imgSrcApp: workDessert,
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
  {
    name: "Memory",
    imgSrcApp: memory,
    linkGit: "https://github.com/JairDev/memory-game",
    linkDemo: "https://memorybrain.netlify.com/",
    dataDescription: [
      {
        paragraph: `Desafía tu memoria, con el juego de memoria mas desafiante jamás creado.`,
      },
    ],
  },
  {
    name: "Timer",
    imgSrcApp: timer,
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
    challenge: "Construir página de inicio de comercio electrónico.",
    difficulty: "Intermedio",
    source: "https://www.frontendmentor.io/",
    dataDescription: [
      {
        paragraph: `El desafío consistía en construir esta página de inicio de comercio electrónico y hacer que se vea lo más cerca posible del diseño.`,
      },
    ],
  },
  {
    name: "Todo app",
    imgSrcApp: todo,
    linkGit: "https://github.com/JairDev/to-do-app",
    linkDemo: "https://todo-list-app-300dev.netlify.app/",
    challenge: "Construir aplicación aplicación de todo.",
    difficulty: "Intermedio",
    source: "https://www.frontendmentor.io/",
    dataDescription: [
      {
        paragraph: `En este desafío se construyó una app de todo con una funcionalidad de reordenar los elementos.`,
      },
    ],
  },
];
