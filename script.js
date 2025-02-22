window.addEventListener("mousemove", (e)=>{
    let cursor = document.getElementById("cursor");
    setTimeout(()=>{
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    },50)
})

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".logo, .navbar, .projetoX, .likedin, .email, .anterior, .proximo, .Enviar");
    const cursor = document.querySelector(".cursor");
    
    function addActiveClass() {
        cursor.classList.add("active");
    }
    
    function removeActiveClass() {
        cursor.classList.remove("active");
    }
    
    elementos.forEach(element => {
        element.addEventListener("mouseenter", addActiveClass);
        element.addEventListener("mouseleave", removeActiveClass);
    });
});

function handleScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY === 0) {
        // Se o usuário estiver no topo da página
        header.style.backgroundColor = 'transparent';
    } else {
        // Se o usuário não estiver no topo da página
        header.style.backgroundColor = '#FFFFFF';
    }
}

function setupScrollListener() {
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    if (mediaQuery.matches) {
        // Se a tela for menor ou igual a 576px, adiciona o listener
        document.addEventListener('scroll', handleScroll);
    } else {
        // Se a tela for maior que 576px, remove o listener e reseta o fundo
        document.removeEventListener('scroll', handleScroll);
        const header = document.querySelector('.header');
        header.style.backgroundColor = 'transparent'; // Reseta o fundo
    }
}

// Configura o listener inicial
setupScrollListener();

// Atualiza o listener quando a tela for redimensionada
window.addEventListener('resize', setupScrollListener);