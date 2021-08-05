import workCoin from "../assets/coin.png";
import workDessert from "../assets/desert.png";
import imgCode from "../assets/personal-projects-code-s.png";
// import imgCode from "../assets/coin.mp4";
import imgCodeHoc from "../assets/personal-projects-code-hoc.png";
import tablet from "../assets/tablet.png";
// import workCoinGif from "../assets/img-page.gif";
// import workCoinGif from "../assets/coin.png";
// import workCoinGif from "../assets/coin.mp4";

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

export const personalProjects = [
  {
    id: "id1",
    name: "Coin Market App",
    imgSrcTablet: tablet,
    imgSrcGif: workCoin,
    imgCode: imgCodeHoc,
    linkGit: "https://github.com/JairDev/coin-market-info-",
    linkDemo: "https://coin-market-info.vercel.app/",
    dataDescription: [
      {
        paragraph: `React y otras librerías parecidas están pensadas para facilitar la creación de interfaces, aumentando
        la productividad, al acelerar el proceso de desarrollo. En la etapa de aprendizaje de React, nos vamos topando con conceptos mas avanzados
        a medida que avanzamos.`,
      },
      {
        paragraph: `En esta aplicación que consiste en, mostrar criptomonedas en tendencia, buscar 
        criptomonedas de tu preferencia o leer noticias actualizadas referente al mundo cripto, tenía
        dos componentes similares en cuanto a funcionalidad y la manera en que dependían de un valor para
        mostrar datos en la interfaz.`,
      },
      {
        paragraph: `Un primer componente, que renderiza la tabla con información sobre monedas, este depende de
        la entrada del usuario y de una función que toma esos datos, actualiza una variable de estado
        y se renderiza la moneda.`,
      },
      {
        paragraph: `Un segundo componente, que renderiza las noticias actuales sobre criptomonedas, que tambien
        depende de una entrada del usuario y la misma funcionalidad que el primer componente. En la documentación
        de React, se habla de los componentes de orden superior, recordemos que React es una librería construída
        en JavaScript, donde existen las funciones de orden superior, (funciones que reciben otras funciones
        como argumentos)`,
      },
      {
        paragraph: `En React un componente de orden superior, es una función que recibe un componente como
        argumento y devuelve un nuevo componente. Un componente de orden superior me permite definir estos
        datos y/o funciones en un mismo lugar para luego compartirlos con otros componentes, reutilizando
        esa función para trabajar de una manera mas eficiente.`,
      },
      {
        paragraph: `Como pueden ver en este fragmento, el componente de orden superior devuelve un nuevo
        componente, transformado mediante las props que se le pasan.`,
      },
    ],
  },
  {
    id: "id2",
    name: "Tasty dessert",
    imgSrcTablet: tablet,
    imgSrcGif: workDessert,
    imgCode: imgCode,
    linkGit: "https://github.com/JairDev/hot-food-app",
    linkDemo: "https://tastypie.netlify.app/",
    dataDescription: [
      {
        paragraph: `Realizando esta app, pude ver algunas particularidades de React, por ejemplo, el trabajar
        con formularios y entradas de usuario. La mayoría de las veces cuando trabajamos con formularios
        y entradas del usuario, queremos hacer algo con esos datos (valores), enviar un correo, mostrar algo
        en nuestra interfaz, etc.`,
      },
      {
        paragraph: `Para esto React nos proporciona una técnica llamada "componentes controlados",
        recordemos que en React para actualizar algún elemento de la interfaz, lo hacemos mediante el estado setState()
        React al "notar" un cambio en el estado actualiza la interfaz en consecuencia.`,
      },
      {
        paragraph: `
        Lo que hacemos entonces es determinar que el estado de React sea la unica "fuente de verdad", 
        de esta manera los componentes que rendericen un formulario, tienen el control sobre lo que pasa 
        en ese formulario. El atributo value del elemento input, al tener como valor la variable de estado "value",
        el valor del input estará controlado por el estado de React, pudiendo así pasar ese valor a otros componentes
        u otros elementos de nuestra interfaz. 
        `,
      },
      {
        paragraph: `Vean aquí, este componente está renderizando un formulario, 
        el estado de este componente es la fuente de verdad para ese formulario, tomo ese valor (variable de estado)
        actualizado por un evento onChange y mediante el evento submit paso esos datos a una función en otro componente para hacer la busqueda de un postre.`,
      },
    ],
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
