import coinTrackerLaptopSmall from "../assets/portfolio-track/coin-laptop-small.webp";
import coinTrackerLaptopMedium from "../assets/portfolio-track/coin-laptop-medium.webp";

import dessertLaptopSmall from "../assets/dessert-app/dessert-laptop-small.webp";
import dessertLaptopMedium from "../assets/dessert-app/dessert-laptop-medium.webp";

import memoryLaptopSmall from "../assets/memory-game/memory-laptop-small.webp";
import memoryLaptopMedium from "../assets/memory-game/memory-laptop-medium.webp";

import timerLaptopSmall from "../assets/timer-app/timer-laptop-small.webp";
import timerLaptopMedium from "../assets/timer-app/timer-laptop-medium.webp";

import roomLaptopSmall from "../assets/room-app/room-laptop-small.webp";
import roomLaptopMedium from "../assets/room-app/room-laptop-medium.webp";

import todoLaptopSmall from "../assets/todo-app/todo-laptop-small.webp";
import todoLaptopMedium from "../assets/todo-app/todo-laptop-medium.webp";

import bxlReact from "@iconify/icons-bx/bxl-react";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";
import bxlSass from "@iconify/icons-bx/bxl-sass";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import bxlHtml5 from "@iconify/icons-bx/bxl-html5";
import bxlGit from "@iconify/icons-bx/bxl-git";
import styledcomponentsIcon from "@iconify/icons-file-icons/styledcomponents";
import reduxFill from "@iconify/icons-akar-icons/redux-fill";
import nextjsFill from "@iconify/icons-akar-icons/nextjs-fill";
import tailwindIcon from "@iconify/icons-file-icons/tailwind";

export const svgIcons = [
  { name: "Javascript", svg: bxlJavascript },
  { name: "React", svg: bxlReact },
  { name: "NextJs", svg: nextjsFill },
  { name: "Redux", svg: reduxFill },
  { name: "Tailwindcss", svg: tailwindIcon },
  { name: "Styled Components", svg: styledcomponentsIcon },
  { name: "Sass", svg: bxlSass },
  { name: "Css3", svg: bxlCss3 },
  { name: "Html5", svg: bxlHtml5 },
  { name: "Git", svg: bxlGit },
];

export const personalProjects = [
  {
    name: "Coin Market Track",
    imgSrcApp: {
      small: coinTrackerLaptopSmall,
      medium: coinTrackerLaptopMedium,
    },
    linkGit: "https://github.com/JairDev/portfolio-tracker",
    linkDemo: "https://portfoliotrack.vercel.app/home",
    stack: ["Nextjs", "MUI", "API", "Nodejs", "Mongodb"],
    dataDescription: [
      {
        paragraph: `Aplicación web para crear un portafolio de criptomonedas, puedes agregar y/o eliminar
        las criptomonedas de tu preferencia a un gráfico para hacer seguimiento de tus cripto-activos favoritas`,
      },
      {
        paragraph: `Tomé un diseño para llevarlo a código, amplié el diseño para agregar funcionalidades de inicio de sesión,
        registro de usuario, entre otros.`,
      },
      {
        paragraph: `Escribí el código de la lógica para hacer la conexión entre el frontend y el backend`,
      },
    ],
  },
  {
    name: "Tasty dessert",
    imgSrcApp: {
      small: dessertLaptopSmall,
      medium: dessertLaptopMedium,
    },
    linkGit: "https://github.com/JairDev/hot-food-app",
    linkDemo: "https://tastypie.netlify.app/",
    stack: ["Reactjs", "Redux", "Taildwincss"],
    dataDescription: [
      {
        paragraph: `Aplicación web sobre postres en venta, con funcionalidad de carro de compra, puedes agregar
        artículos al carro de compras, editar la cantidad de artículos, entre otras funcionalidades.`,
      },
    ],
  },
  {
    name: "Memory",
    imgSrcApp: {
      small: memoryLaptopSmall,
      medium: memoryLaptopMedium,
    },
    linkGit: "https://github.com/JairDev/memory-game",
    linkDemo: "https://memorybrain.netlify.com/",
    stack: ["Javascript"],
    dataDescription: [
      {
        paragraph: `Desafía tu memoria, con el juego de memoria mas desafiante jamás creado.`,
      },
    ],
  },
  {
    name: "Timer",
    imgSrcApp: {
      small: timerLaptopSmall,
      medium: timerLaptopMedium,
    },
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
    imgSrcApp: {
      small: roomLaptopSmall,
      medium: roomLaptopMedium,
    },
    linkGit: "https://github.com/JairDev/room-homepage",
    linkDemo: "https://coolrooms.netlify.app/",
    stack: ["Reactjs"],
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
    imgSrcApp: {
      small: todoLaptopSmall,
      medium: todoLaptopMedium,
    },
    linkGit: "https://github.com/JairDev/to-do-app",
    linkDemo: "https://todo-list-app-300dev.netlify.app/",
    stack: ["Reactjs"],
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
