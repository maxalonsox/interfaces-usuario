const nav = document.getElementById("nav"); // NAV
const title = document.getElementById("title-page"); //header
const goblin = document.getElementById("green-goblin"); //duende verde
const city1 = document.getElementById("city-1"); //ciudad fondo izquierda
const city2 = document.getElementById("city-2"); //ciudad fondo centro
const city3 = document.getElementById("city-3"); //ciudad fondo derecha
const spiderweb1 = document.getElementById("spiderweb-1"); //telaraña izquierda
const spiderweb2 = document.getElementById("spiderweb-2"); //telaraña derecha
const spiderman1 = document.getElementById("spiderman-1"); //spiderman izquierda
const spiderman2 = document.getElementById("spiderman-2"); //spiderman centro
const spiderman3 = document.getElementById("spiderman-3"); //spiderman derecha
const card1 = document.getElementById("card-1"); //card 1 section 3
const card2 = document.getElementById("card-2"); //card 2 section 3
const card3 = document.getElementById("card-3"); //card 3 section 3
const imgsMore = document.querySelectorAll(".img-more"); // Todas las img de la seccion more friends
const img1More = document.querySelector("#more-1"); //img 1 de la seccion more-friends
const img2More = document.querySelector("#more-2"); //img 2 de la seccion more-friends
const img3More = document.querySelector("#more-3"); //img 3 de la seccion more-friends
const img4More = document.querySelector("#more-4"); //img 4 de la seccion more-friends

window.onscroll = function() {
    
  let currentScrollPos = window.scrollY;

  // hace que el header suba o baje dependiendo del scroll
  if (currentScrollPos < 200) {
      title.style.top = 91 - currentScrollPos * 0.4 + "px";
  } else {
      title.style.top = "15px";
  }

  // el header se achica o se agrande dependiendo del scroll
  if (currentScrollPos < 200) {
      title.style.width = 590 - currentScrollPos * 2.5 + "px";
  } else {
      title.style.width = "130px";
  }

  // el fondo del nav cambia de color al llegar al fondo violeta
  if (currentScrollPos > 420) {
      nav.style.backgroundColor = "rgba(84, 153, 248, 1)";
  } else {
      nav.style.backgroundColor = "rgba(84, 153, 248, 0)";
  }

  //el duende verde va más lento que el scroll
  goblin.style.marginTop = -87 + currentScrollPos * 0.1 + "px";
  
  //al top de cada elemento se le suma un porcentaje de la posición del scroll así se genera el efecto parallax
  city1.style.top = 144 + currentScrollPos * 0.4 + "px";
  city2.style.top = 634 + currentScrollPos * 0.5 + "px";
  city3.style.top = 126 + currentScrollPos * 0.4 + "px";
  spiderman1.style.top = 388 + currentScrollPos * 0.12 + "px";
  spiderman2.style.top = 403 + currentScrollPos * 0.03 + "px";
  spiderman3.style.top = 335 + currentScrollPos * 0.08 + "px";
  spiderweb1.style.top = 400 + currentScrollPos * 0.03 + "px";
  spiderweb2.style.top = 340 + currentScrollPos * 0.08 + "px";

  //las cards se mueven a destiempo
  card1.style.marginTop = -900 + currentScrollPos * 0.07 + "px";
  card2.style.marginTop = -750 + currentScrollPos * 0.07 + "px";
  card3.style.marginTop = -600 + currentScrollPos * 0.07 + "px";

  // borra la clase mostrar-img-more a todos los elementos con la clase img-more
  function removeClassImgMore() {
    
    imgsMore.forEach(img => {
      img.classList.remove("mostrar-img-more");
    });

  }
   
  // si el valor del scroll es menor a la posicion final de la PRIMERA imagen le agrega la clase 
  // para mostrar LA PRIMERA IMAGEN
  if (window.scrollY < 4300) {
    removeClassImgMore();
    img1More.classList.add("mostrar-img-more");
  }

  // si el valor del scroll es mayor a la posicion final de la PRIMERA imagen y menor a la posicion final 
  // de la segunda imagen le agrega la clase para mostrar la SEGUNDA IMAGEN
  if (window.scrollY > 4300 && window.screenY < 4700) {
    removeClassImgMore();
    img2More.classList.add("mostrar-img-more");

  }

  // si el valor del scroll es mayor a la posicion final de la SEGUNDA imagen y menor a la posicion final 
  // de la TERCERA imagen le agrega la clase para mostrar la TERCERA IMAGEN
  if (window.scrollY > 4700 && window.screenY < 5100) {
    removeClassImgMore();
    img3More.classList.add("mostrar-img-more");
  }

  // si el valor del scroll es mayor a la posicion final de la TERCERA imagen
  // agrega la clase para mostrar la CUARTA IMAGEN 
  if (window.scrollY > 5100) {
    removeClassImgMore();
    img4More.classList.add("mostrar-img-more");
  }
      
}