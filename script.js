// ------------------------ Mouse bolinha ----------------------------
window.addEventListener("mousemove", (elemento)=>{
    let cursor = document.getElementById("cursor");
    setTimeout(()=>{
        cursor.style.top = `${elemento.clientY}px`;
        cursor.style.left = `${elemento.clientX}px`;
    },50)
})

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".caseStudies, .logo, .navbar, .projetoX, .likedin, .email, .nome, .anterior, .proximo, .Enviar, #textarea");
    const cursor = document.querySelector(".cursor");
    
    function addActiveClass() {
        cursor.classList.add("active");
    }
    
    function removeActiveClass() {
        cursor.classList.remove("active");
    }
    
    elementos.forEach(elemento => {
        elemento.addEventListener("mouseenter", addActiveClass);
        elemento.addEventListener("mouseleave", removeActiveClass);
    });
});

//----------------------- Header ---------------------

function handleScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY < 40) {
        header.style.backgroundColor = 'transparent';

    } else {
        header.style.backgroundColor = '#EDE5DC';
    }
}

//----------------------- Header mediaQuery 576px ---------------------

function mediaQueryMobile() {
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    if (mediaQuery.matches) {

        document.addEventListener('scroll', handleScroll);
    } else {
        document.removeEventListener('scroll', handleScroll);
        const header = document.querySelector('.header');
        header.style.backgroundColor = 'transparent'; 
    }
}

mediaQueryMobile();

window.addEventListener('resize', mediaQueryMobile);

// ------------------------ Formulário ------------------------

document.querySelector(".formulario").addEventListener('submit', function(evento) {
    let nome = document.querySelector('.nome').value;
    let email = document.querySelector('.email').value;
    let mensagem = document.getElementById('textarea').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos para enviar a mensagem")
        evento.preventDefault();
    } if (email ==! regex) {
        evento.preventDefault();
    }
    });
