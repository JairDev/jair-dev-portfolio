(this["webpackJsonpjair-portfolio"]=this["webpackJsonpjair-portfolio"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(33)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(3),l=t.n(s);t(15),t(16),t(17);var o=function(e){var a=e.name,t=e.lastName,n=e.userOccupation;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content-profile-info"},c.a.createElement("span",{className:"profile-name"},"".concat(a," ").concat(t)),c.a.createElement("span",{className:"profile-role"},"".concat(n))))};t(18);var r=function(e){var a=e.iconClass,t=e.source,n=e.name;return c.a.createElement("div",{className:"content-social-media"},c.a.createElement("div",{className:"social-media"},c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{className:"".concat(a)},c.a.createElement("use",{xlinkHref:"#".concat(a)})),c.a.createElement("span",{className:"social-media-name"},n))))};var i=function(e){var a=e.array,t=e.Component,n=e.type;return a.map((function(e){switch(n){case"userInfo":return c.a.createElement(t,{key:e.name,name:e.name,lastName:e.lastName,userOccupation:e.occupation});case"socialMedia":return c.a.createElement(t,{key:e.iconClass,name:e.name,iconClass:e.iconClass,source:e.source});case"skills":return c.a.createElement(t,{key:e.name,skillName:e.name,iconClass:e.iconClass});case"tools":return c.a.createElement(t,{key:e.iconClass,skillName:e.name,iconClass:e.iconClass});case"projects":return c.a.createElement(t,{key:e.name,img:e.imgSrc,projectName:e.name,projectDescription:e.description,linkGit:e.linkGit,linkDemo:e.linkDemo});default:console.log("error")}}))},m=[{name:"Github",iconClass:"icon-github",source:"https://github.com/JairDev"},{name:"Linkedin",iconClass:"icon-linkedin",source:"https://www.linkedin.com/in/frontend-alfredo-moscoso/"},{name:"Twitter",iconClass:"icon-twitter",source:"https://twitter.com/JairDevep"},{name:"Gmail",iconClass:"icon-mail4",source:"https://gmail.com"}],p=[{name:"ReactJs",iconClass:"icon-react"},{name:"JavaScript",iconClass:"icon-javascript"},{name:"CSS3",iconClass:"icon-css3"},{name:"HTML5",iconClass:"icon-html-five"}],u=[{name:"Git",iconClass:"icon-git"},{name:"Sass",iconClass:"icon-sass"},{name:"Photoshop",iconClass:"icon-adobephotoshop"}],f=[{name:"Alfredo",lastName:"Moscoso",occupation:"FrontEnd-Developer",photo:"img"}],d=[{name:"Coin Market App",imgSrc:"img-coin.png",linkGit:"https://github.com/JairDev/coin-market-info-",linkDemo:"https://coin-market-info.vercel.app/",description:"En Coin Market App, podras visualizar los precios actuales de las criptomonedas y encontrar noticias relacionadas con la moneda de tu preferencia"},{name:"Tasty dessert",imgSrc:"img-dessert.png",linkGit:"https://github.com/JairDev/hot-food-app",linkDemo:"https://tastypie.netlify.app/",description:"Tus postres favoritos, a precios accesibles"},{name:"Recipes",imgSrc:"img-recipe.png",linkGit:"https://github.com/JairDev/recipe-app",linkDemo:"https://tasterecipes.netlify.com/",description:"Encuentra las mejores recetas, guarda tu favorita o crea tu propia receta"},{name:"Memory",imgSrc:"img-memory.png",linkGit:"https://github.com/JairDev/memory-game",linkDemo:"https://memorybrain.netlify.com/",description:"Desaf\xeda tu memoria, con el juego de memoria mas desafiante jamas creado"},{name:"Timer",imgSrc:"img-timer.png",linkGit:"https://github.com/JairDev/training-timer-and-chronometer",linkDemo:"https://trainingtimerapp.netlify.com/",description:"Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and"}];t(19);var v=function(e){var a=e.name,t=e.lastName,n=e.userOccupation;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content-profile"},c.a.createElement(o,{name:a,lastName:t,userOccupation:n}),c.a.createElement("div",{className:"content-profile-social-media"},c.a.createElement(i,{array:m,Component:r,type:"socialMedia"}))))};t(20);var E=function(e){var a=e.skillName,t=e.iconClass;return c.a.createElement("div",{className:"content-skills"},c.a.createElement("div",{className:"skills"},c.a.createElement("div",{className:"content-icon-skills"},c.a.createElement("svg",{className:"icon ".concat(t)},c.a.createElement("use",{xlinkHref:"#".concat(t)}))),c.a.createElement("span",null,a)))},g=t(1);t(21);var h=function(e){var a=e.img,t=e.projectName,s=e.projectDescription,l=e.linkGit,o=e.linkDemo,r=Object(n.useRef)();return c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"projects-img"},c.a.createElement("img",{alt:"",src:a})),c.a.createElement("div",{ref:r,className:"projects-info","data-info":t},c.a.createElement("div",{className:"content-projects-description"},c.a.createElement("div",{className:"projects-description"},c.a.createElement("span",{className:"projects-name"},t),c.a.createElement("p",{className:"description"},s),c.a.createElement("div",{className:"link-projects"},c.a.createElement("div",{className:"link-projects-all github"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},c.a.createElement("svg",{className:"icon-github-project"},c.a.createElement("use",{xlinkHref:"#icon-github"})))),c.a.createElement("div",{className:"link-projects-all demo"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},c.a.createElement("svg",{className:"icon icon-new-tab"},c.a.createElement("use",{xlinkHref:"#icon-new-tab"})))))))),c.a.createElement("span",{onClick:function(){r.current.classList.toggle("active")},className:"more-info"},c.a.createElement("svg",{className:"icon icon-plus"},c.a.createElement("use",{xlinkHref:"#icon-plus"}))),c.a.createElement("span",{className:"border-more-info animate"},c.a.createElement("svg",{className:"icon icon-plus"},c.a.createElement("use",{xlinkHref:"#icon-plus"}))))};var N=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(0),t=Object(g.a)(a,2),c=t[0],s=t[1],l=Object(n.useState)(""),o=Object(g.a)(l,2),r=o[0],i=o[1],m=Object(n.useState)(""),p=Object(g.a)(m,2),u=p[0],f=p[1],d=Object(n.useCallback)((function(){var a=e.current,t=a.getBoundingClientRect(),n=a.childNodes,s=n[0].offsetHeight,l=s*n.length,o=((t.height-l)/(n.length-1)+s)*c;c>=n.length-1?i("deactivate-top"):i(""),f(c>0?"activate-bottom":""),a.style="transform: translateY(-".concat(o,"px)")}),[c]);return Object(n.useEffect)((function(){d()}),[c,d]),{count:c,handleTop:function(e){e.preventDefault(),s((function(e){return e+1}))},handleBottom:function(e){e.preventDefault(),s((function(e){return e-1}))},elementRef:e,classTop:r,classBottom:u}};t(22);var k=function(e){var a=e.className,t=e.onClick,n=e.refButton,s=e.children;return c.a.createElement("div",{ref:n,className:"parent-content-button ".concat(a)},c.a.createElement("form",null,c.a.createElement("button",{className:a,onClick:t},s)))},b=(t(23),c.a.createElement("svg",{className:"icon icon-long-arrow-up topSvg"},c.a.createElement("use",{xlinkHref:"#icon-long-arrow-up"})));var j=function(){var e=N(),a=e.count,t=e.handleTop,s=e.handleBottom,l=e.elementRef,o=e.classTop,r=e.classBottom,m=Object(n.useState)(0),p=Object(g.a)(m,2),u=p[0],f=p[1];return Object(n.useEffect)((function(){var e=l.current.childNodes;f(e.length)}),[a,l]),c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{classSvg:"topSvg",className:""===o?"top":"top ".concat(o),onClick:t},b),c.a.createElement("span",{className:"count-projects"},"".concat(a+1,"/").concat(u)),c.a.createElement("div",{ref:l,className:"content-projects"},c.a.createElement(i,{array:d,Component:h,type:"projects"})),c.a.createElement(k,{classSvg:"bottomSvg",className:""===r?"bottom":"bottom ".concat(r),onClick:s},b))};t(24);var y=function(){var e=Object(n.useState)(new Date),a=Object(g.a)(e,2),t=a[0],s=a[1],l=t.getHours(),o=t.getMinutes(),r="";l<12?r="AM":l>=12&&l<24?r="PM":l>23&&(r="AM");var i="".concat(l>12?l-12:l,":").concat(o<10?"0":"").concat(o," ").concat(r),m=Object(n.useState)(i),p=Object(g.a)(m,2),u=p[0],f=p[1],d=Object(n.useCallback)((function(){s(new Date),f(i)}),[i]);return Object(n.useEffect)((function(){var e=setInterval((function(){d()}),1e3);return function(){return clearInterval(e)}}),[d]),c.a.createElement("div",{className:"content-date"},c.a.createElement("span",{className:"span-content-date"}),c.a.createElement("span",{className:"span-time"},u))},C=t(9),w=(t(25),t(32),c.a.createElement("svg",{className:"icon icon-user topSvg"},c.a.createElement("use",{xlinkHref:"#icon-user"})));var O=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)(null),s=Object(n.useRef)(null),l=Object(n.useRef)(null),o=Object(n.useRef)(null),r=Object(n.useRef)(null),m=Object(n.useRef)(null);return Object(n.useEffect)((function(){C.a.timeline().from(t,{duration:.5,delay:.3,scaleX:0,opacity:0,ease:"slow(0.7, 0.7,  false)"}).from(s,{duration:.5,scaleY:0,opacity:0,ease:"slow(0.7, 0.7,  false)"},"-=0.5").from(".span-content-date",{duration:.5,scaleY:0,opacity:0,ease:"slow(0.7, 0.7,  false)"},"-=0.5").from(".all",{duration:.5,opacity:0,stagger:.2}).from(l,{opacity:0}).from(o,{duration:1.5,opacity:0})}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"App-header"},c.a.createElement("span",{ref:function(e){return t=e},className:"border-animate"}),c.a.createElement("div",{className:"App-header-content"},c.a.createElement("span",{ref:function(e){return l=e},className:"span-hi"},"Hi,"),c.a.createElement("span",{ref:function(e){return o=e},className:"span-welcome"},"Welcome")),c.a.createElement(y,null)),c.a.createElement("aside",{className:"App-aside"},c.a.createElement("span",{ref:function(e){return s=e},className:"border-aside-animate"}),c.a.createElement("span",{ref:function(e){return m=e},className:"animate-span-profile active"}),c.a.createElement(k,{classSvg:"topSvg",className:"content-button-info-child",onClick:function(t){e.current.classList.toggle("scale-info"),a.current.classList.toggle("scale"),m.classList.toggle("active"),a.current.className.includes("scale")||a.current.classList.remove("hidden"),t.preventDefault()}},w)),c.a.createElement("div",{ref:e,onTransitionEnd:function(){var e=a.current;e.classList.add("hidden"),e.className.includes("scale")?e.classList.add("hidden"):e.classList.remove("hidden")},className:"App-content-personal-info"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"",alt:""})),c.a.createElement("h3",{className:"title-personal-info"},"\xbfShall we have a coffee?"),c.a.createElement("span",{className:"sub-title-personal-info"},"Yes, the title is true, I would like to have a coffee with you!"),c.a.createElement("p",{className:"text-personal-info first"},"I am Alfredo Moscoso, frontend developer, I am excited to think that we can create important things, a web application, a website, those things that will change a person's life, being part of that experience keeps me in constant learning, being able to improve my skills all the days, technical skills in JavaScript, Reactjs, Sass, Html5, willing to continue learning new technologies, work hand in hand with a team and that we make that next big project possible."),c.a.createElement("p",{className:"text-personal-info"},"But not everything is technology, I enjoy the company of a pet, playing a video game, my new passion is gardening, these days it is a relaxing activity.")),c.a.createElement("div",{className:"App-content-skills kit-content"},c.a.createElement("div",{className:"content-title-skills"},c.a.createElement("div",{className:"title-skills"},c.a.createElement("h2",null,"Skills"))),c.a.createElement("div",{className:"over-hidden"},c.a.createElement("div",{ref:r,className:"over-kit"},c.a.createElement(i,{array:p,Component:E,type:"skills"})))),c.a.createElement("div",{className:"App-content-tools kit-content"},c.a.createElement("div",{className:"content-title-tools"},c.a.createElement("div",{className:"title-tools"},c.a.createElement("h2",null,"Tools"))),c.a.createElement("div",{className:"over-hidden"},c.a.createElement("div",{className:"over-kit"},c.a.createElement(i,{array:u,Component:E,type:"tools"})))),c.a.createElement("div",{className:"content-button-personal-info"},c.a.createElement("div",{className:"parent-action-link-about-me"},c.a.createElement("a",{href:"https://gmail.com",target:"_blank",rel:"noopener noreferrer",className:"button-action-about-me"},"\xa1 Let's have that coffee !")))),c.a.createElement("section",{ref:a,className:"App-main"},c.a.createElement("section",{className:"App-content-profile-skills"},c.a.createElement("div",{className:"App-content-profile all"},c.a.createElement(i,{array:f,Component:v,type:"userInfo"}))),c.a.createElement("section",{className:"App-parent-projects all"},c.a.createElement("div",{className:"App-content-projects"},c.a.createElement("div",{className:"content-title-projects"},c.a.createElement("div",{className:"title-projects"},c.a.createElement("h2",null,"Projects"))),c.a.createElement("div",{className:"content-title-projects-top"},c.a.createElement("div",{className:"title-projects-top"},c.a.createElement("h2",null,"Projects"))),c.a.createElement(j,null)))))};var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.1c08056b.chunk.js.map