const modalCurso = document.getElementById("modalCurso");
const modalCompra = document.getElementById("modalCompra");

const cerrarModal = document.getElementById("cerrarModal");
const cerrarCompra = document.getElementById("cerrarCompra");

const cursos = document.querySelectorAll(".curso");

const inscribirse = document.getElementById("inscribirse");

const modalImagenCurso = document.getElementById("modalImagenCurso");
const modalCategoria = document.getElementById("modalCategoria");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const modalPrecioCompra = document.getElementById("modalPrecioCompra");

const cursoCompra = document.getElementById("cursoCompra");
const nombreCompra = document.getElementById("nombreCompra");
const precioCompra = document.getElementById("precioCompra");

let cursoActual = "";

const informacionCursos = {

    web:{
        imagen:"recursos/desarrolloweb.jpg",
        categoria:"PROGRAMACIÓN",
        titulo:"Desarrollo Web desde cero",
        descripcion:"Aprende a crear páginas web modernas desde cero utilizando HTML, CSS y JavaScript. No necesitas experiencia previa.",
        precio:"Gratis",
        gratis:true
    },

    ux:{
        imagen:"recursos/diseñoux.jpg",
        categoria:"DISEÑO",
        titulo:"Diseño UX/UI",
        descripcion:"Aprende a crear interfaces modernas y experiencias digitales centradas en las necesidades de los usuarios.",
        precio:"$299 MXN",
        gratis:false
    },

    marketing:{
        imagen:"recursos/marketing.jpg",
        categoria:"MARKETING",
        titulo:"Marketing Digital",
        descripcion:"Aprende las principales estrategias de marketing digital para crear campañas y hacer crecer un negocio.",
        precio:"$249 MXN",
        gratis:false
    },

    emprendimiento:{
        imagen:"recursos/emprendimiento.jpg",
        categoria:"NEGOCIOS",
        titulo:"Emprendimiento",
        descripcion:"Aprende a convertir tus ideas en proyectos y conoce las bases para comenzar un nuevo negocio.",
        precio:"$349 MXN",
        gratis:false
    }

};

cursos.forEach(curso => {

    curso.addEventListener("click", () => {

        cursoActual = curso.dataset.curso;

        const informacion = informacionCursos[cursoActual];

        modalImagenCurso.src = informacion.imagen;
        modalCategoria.textContent = informacion.categoria;
        modalTitulo.textContent = informacion.titulo;
        modalDescripcion.textContent = informacion.descripcion;

        modalPrecio.textContent = informacion.precio;
        modalPrecioCompra.textContent = informacion.precio;

        if(informacion.gratis){

            modalPrecio.classList.add("gratis");
            modalPrecio.classList.remove("pago");

            inscribirse.textContent = "Acceder gratis";

        }else{

            modalPrecio.classList.remove("gratis");
            modalPrecio.classList.add("pago");

            inscribirse.textContent = "Comprar curso";

        }

        modalCurso.classList.add("activo");

    });

});

cerrarModal.addEventListener("click", () => {
    modalCurso.classList.remove("activo");
});

cerrarCompra.addEventListener("click", () => {
    modalCompra.classList.remove("activo");
});

inscribirse.addEventListener("click", () => {

    const informacion = informacionCursos[cursoActual];

    if(informacion.gratis){

        alert("Te has inscrito al curso");

        modalCurso.classList.remove("activo");

    }else{

        cursoCompra.textContent = informacion.titulo;
        nombreCompra.textContent = informacion.titulo;
        precioCompra.textContent = informacion.precio;

        modalCurso.classList.remove("activo");
        modalCompra.classList.add("activo");

    }

});

window.addEventListener("click", (e) => {

    if(e.target === modalCurso){
        modalCurso.classList.remove("activo");
    }

    if(e.target === modalCompra){
        modalCompra.classList.remove("activo");
    }

});

document.getElementById("formCompra").addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Compra realizada correctamente");

    modalCompra.classList.remove("activo");

});

const botonPayPal = document.getElementById("botonPayPal");

botonPayPal.addEventListener("click", () => {
    window.location.href = "https://www.paypal.com/";
});

