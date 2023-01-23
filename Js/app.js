
const header = document.querySelector("header");

const linksBtn = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger-bar")





/* --------------barra de navegación pegajosa----------- */

function navbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);

}

navbar();

window.addEventListener("scroll", () => {
    navbar()
    activarLink();
});



/* --------------Boton burbuja explosiva----------- */

const btnBurbuja = document.querySelector(".btn-cv");

btnBurbuja.addEventListener("click", () => {
    // e.preventDefault();
    btnBurbuja.classList.add("explosion");

    setTimeout(() => {
        btnBurbuja.classList.remove("explosion");
    }, 550) // 1s = 1000ms
});


/* --------------animacion----------- */

const sr = ScrollReveal({
    duration: 1500,

});

sr.reveal(".titulo-i", { distance: "70px", origin: "bottom", delay: 600 });

sr.reveal(".text", { distance: "70px", origin: "bottom", delay: 600 });

sr.reveal(".rl", { distance: "70px", origin: "bottom", delay: 600 });

sr.reveal(".scroll-t", { distance: "70px", origin: "bottom", delay: 600 });

sr.reveal(".cr", { distance: "70px", origin: "bottom", delay: 600 });

sr.reveal(".wave", { distance: "300px", origin: "left", delay: 800 });

sr.reveal(".column-2", { distance: "300px", origin: "top", delay: 800 });




/* --------------Activar links de botones del menu----------- */

function activarLink() {

    let secciones = document.querySelectorAll("section[id]");


    let seccionesProbadas = Array.from(secciones).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        }

    }).filter((sct) => sct.y <= 0);

    //obtendrá el último elemento de nuestra matriz
    let seccionId = seccionesProbadas.at(-1).id;

    linksBtn.forEach(l => l.classList.remove("active"));

    linksBtn[seccionId].classList.add("active");

}

/* --------------Tema Oscuro----------- */

//obtenemos el primer valor del localStorage de la clase temDark
let primerTema = localStorage.getItem("temaDark");


cambioTema(+primerTema);

function cambioTema(esOscuro) {
    if (esOscuro) {
        document.body.classList.add("temaDark")
        toggle_btn.classList.replace("fa-moon", "fa-sun");

        //establecemos como valor 1 a clase temaDark en el almacenamiento local
        localStorage.setItem("temaDark", 1);
    }
    else {
        document.body.classList.remove("temaDark")
        toggle_btn.classList.replace("fa-sun", "fa-moon");

        //establecemos como valor 0 a clase temaDark en el almacenamiento local
        localStorage.setItem("temaDark", 0);
    }
};


toggle_btn.addEventListener("click", () => {
    cambioTema(!document.body.classList.contains("temaDark"));
});


/* --------------abrir y cerrar barra de navegación----------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");

});

linksBtn.forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}));