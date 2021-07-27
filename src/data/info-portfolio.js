import workCoin from "../assets/coin.png";
import imgCode from "../assets/personal-projects-code.png";
import workDessert from "../assets/desert.png";

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
  // { name: "Redux", iconClass: "icon-redux" },
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

export const personalProjects = [
  {
    name: "Coin Market App",
    imgSrc: workCoin,
    imgCode: imgCode,
    linkGit: "https://github.com/JairDev/coin-market-info-",
    linkDemo: "https://coin-market-info.vercel.app/",
    paragraph1: `Realizando esta app, pude ver algunas particularidades de React, por ejemplo, el trabajar
    con formularios y entradas de usuario. La mayoría de las veces cuando trabajamos con formularios
    y entradas del usuario, queremos hacer algo con esos datos (valores), enviar un correo, mostrar algo
    en nuestra interfaz, etc.`,
    paragraph2: `Para esto React nos proporciona una técnica llamada "componentes controlados",
    recordemos que en React para actualizar algún elemento de la interfaz, lo hacemos mediante el estado setState()
    React al "notar" un cambio en el estado actualiza la interfaz en consecuencia.`,
    paragraph3: `Como pueden ver en este fragmento, este componente está renderizando un formulario, 
    el estado de este componente es la fuente de verdad para ese formulario, tomo ese valor y mediante 
    el evento submit paso esos datos a una función en otro componente para hacer la busqueda de una moneda.`,
    paragraph4: `
    Lo que hacemos entonces es determinar que el estado de React sea la unica "fuente de verdad", 
    de esta manera los componentes que rendericen un formulario, tienen el control sobre lo que pasa 
    en ese formulario. El atributo value del elemento input, al tener como valor la variable de estado "value",
    el valor del input estará controlado por el estado de React, pudiendo así pasar ese valor a otros componentes
    u otros elementos de nuestra interfaz. 
    `,
  },
  {
    name: "Tasty dessert",
    imgSrc: workDessert,
    linkGit: "https://github.com/JairDev/hot-food-app",
    linkDemo: "https://tastypie.netlify.app/",
    paragraph1: `Realizando esta app, pude ver algunas particularidades de React, por ejemplo, el trabajar
    con formularios y entradas de usuario. La mayoría de las veces cuando trabajamos con formularios
    y entradas del usuario, queremos hacer algo con esos datos (valores), enviar un correo, mostrar algo
    en nuestra interfaz, etc.`,
    paragraph2: `Para esto React nos proporciona una técnica llamada "componentes controlados",
    recordemos que en React para actualizar algún elemento de la interfaz, lo hacemos mediante el estado setState()
    React al "notar" un cambio en el estado actualiza la interfaz en consecuencia.`,
    paragraph3: `Como pueden ver en este fragmento, este componente está renderizando un formulario, 
    el estado de este componente es la fuente de verdad para ese formulario, tomo ese valor y mediante 
    el evento submit paso esos datos a una función en otro componente para hacer la busqueda de una moneda.`,
    paragraph4: `
    Lo que hacemos entonces es determinar que el estado de React sea la unica "fuente de verdad", 
    de esta manera los componentes que rendericen un formulario, tienen el control sobre lo que pasa 
    en ese formulario. El atributo value del elemento input, al tener como valor la variable de estado "value",
    el valor del input estará controlado por el estado de React, pudiendo así pasar ese valor a otros componentes
    u otros elementos de nuestra interfaz. 
    `,
  },
  {
    name: "Recipes",
    imgSrc: "img-recipe.png",
    linkGit: "https://github.com/JairDev/recipe-app",
    linkDemo: "https://tasterecipes.netlify.com/",
    description:
      "Encuentra las mejores recetas, guarda tu favorita o crea tu propia receta",
  },
  {
    name: "Memory",
    imgSrc: "img-memory.png",
    linkGit: "https://github.com/JairDev/memory-game",
    linkDemo: "https://memorybrain.netlify.com/",
    description:
      "Desafía tu memoria, con el juego de memoria mas desafiante jamas creado",
  },
  {
    name: "Timer",
    imgSrc: "img-timer.png",
    linkGit: "https://github.com/JairDev/training-timer-and-chronometer",
    linkDemo: "https://trainingtimerapp.netlify.com/",
    description:
      "App para llevar el control de tiempo y series en tus ejercicios",
  },
];
