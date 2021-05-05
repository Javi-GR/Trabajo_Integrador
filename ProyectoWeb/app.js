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

/*Anima el timeline de las letras iniciales*/

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.texto', { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", {opacity: 0},{opacity: 1 , duration: 1});

tl.fromTo(".texto-grande", {opacity: 0},{opacity: 1 , duration: 1});


