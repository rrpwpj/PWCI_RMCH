const botonEstudiante = document.getElementById("botonEstudiante");
const botonInstructor = document.getElementById("botonInstructor");

const perfilEstudiante = document.getElementById("perfilEstudiante");
const perfilInstructor = document.getElementById("perfilInstructor");


botonEstudiante.addEventListener("click", () => {

    perfilEstudiante.classList.remove("oculto");
    perfilInstructor.classList.add("oculto");

    botonEstudiante.classList.add("activo");
    botonInstructor.classList.remove("activo");

});


botonInstructor.addEventListener("click", () => {

    perfilInstructor.classList.remove("oculto");
    perfilEstudiante.classList.add("oculto");

    botonInstructor.classList.add("activo");
    botonEstudiante.classList.remove("activo");

});


const botonesEditar = document.querySelectorAll(".boton-editar");

botonesEditar.forEach(boton => {

    boton.addEventListener("click", () => {

        alert("Aquí podrás editar tu perfil");

    });

});


const botonesContinuar = document.querySelectorAll(".boton-continuar");

botonesContinuar.forEach(boton => {

    boton.addEventListener("click", () => {

        const curso = boton.closest(".perfil-curso");
        const nombreCurso = curso.querySelector("h4").textContent;

        alert("Continuando con: " + nombreCurso);

    });

});


const botonCrearCurso = document.querySelector(".boton-crear-curso");

if(botonCrearCurso){

    botonCrearCurso.addEventListener("click", () => {

        window.location.href = "crear-curso.html";

    });

}


const botonesAdministrar = document.querySelectorAll(".boton-administrar");

botonesAdministrar.forEach(boton => {

    boton.addEventListener("click", () => {

        const curso = boton.closest(".perfil-curso");
        const nombreCurso = curso.querySelector("h4").textContent;

        alert("Administrando: " + nombreCurso);

    });

});

const modalCertificado = document.getElementById("modalCertificado");
const cerrarCertificado = document.getElementById("cerrarCertificado");
const botonCerrarCertificado = document.getElementById("botonCerrarCertificado");
const botonesCertificado = document.querySelectorAll(".certificado button");

botonesCertificado.forEach(boton => {
    if(boton.classList.contains("boton-cerrar-certificado")) return;
    boton.addEventListener("click", () => {
        modalCertificado.classList.add("mostrar");
    });
});

cerrarCertificado.addEventListener("click", () => {
    modalCertificado.classList.remove("mostrar");
});

botonCerrarCertificado.addEventListener("click", () => {
    modalCertificado.classList.remove("mostrar");
});

modalCertificado.addEventListener("click", e => {
    if(e.target === modalCertificado){
        modalCertificado.classList.remove("mostrar");
    }
});