/*//Login
document.getElementById("mensaje").innerHTML = sessionStorage.getItem(
  "usuario"
);

function guardar() {
  if (typeof Storage !== "undefined") {
    // Almacena un valor usando el método setItem del objeto localStorage
    var x = document.forms["miFormulario"]["usuario"].value;
    sessionStorage.setItem("usuario", x);
    // Recupera el valor usando el método getItem del objeto localStorage
    document.getElementById("mensaje").innerHTML = sessionStorage.getItem(
      "usuario"
    );
  } else {
    document.getElementById("mensaje").innerHTML =
      "Este navegador no soporta web storage...";
  }
  return false;
}*/

/* Funcion que activa la animacion de aparicion y desaparicion del menu de navegacion en formato movil
*/
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
  });
}

navSlide();

// Contador de clicks
var n = sessionStorage.getItem("on_load_counter");

if (n === null) {
  n = 0;
}

n++;

sessionStorage.setItem("on_load_counter", n);

document.getElementById("counter").innerHTML = n;


function noParticulas() {
  document.getElementById("particles-js").style.display = "none";
  
}
