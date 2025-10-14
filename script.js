// ------------------------ Mouse bolinha ----------------------------
window.addEventListener("mousemove", (elemento) => {
    let cursor = document.getElementById("cursor");
    setTimeout(() => {
        cursor.style.top = `${elemento.clientY}px`;
        cursor.style.left = `${elemento.clientX}px`;
    }, 50);
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(
        ".caseStudies, .logo, .navbar, .projetoX, .likedin, .email, .nome, .proximoAnchor, .Enviar, #textarea"
    );
    const cursor = document.getElementById("cursor");

    const path = window.location.pathname;
    if (path.endsWith("info.html") || path.endsWith("en/info.html")) {
        cursor.style.background = "#fff"; 
    }

    function addActiveClass() {
        cursor.classList.add("active");
    }

    function removeActiveClass() {
        cursor.classList.remove("active");
    }

    elementos.forEach((elemento) => {
        elemento.addEventListener("mouseenter", addActiveClass);
        elemento.addEventListener("mouseleave", removeActiveClass);
    });
});



//----------------------- Header ---------------------

function handleScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY < 40) {
        header.style.backgroundColor = '#fff';

    } else {
        header.style.backgroundColor = '#ffffffff';
    }
}

//----------------------- Header mediaQuery 576px ---------------------



// ------------------------ Imagem card ------------------------

function moveCaseStudiesImg() {
  const allCaseStudies = document.querySelectorAll('.caseStudies'); // pega todas as seções
  const isMobile = window.innerWidth <= 768;

  allCaseStudies.forEach(section => {
    const containerLabel = section.querySelector('.containerCaseStudiesLabel');
    const anchor = section.querySelector('.caseStudiesAnchor');
    const imgDiv = section.querySelector('.caseStudiesImg');

    if (!containerLabel || !anchor || !imgDiv) return;

    if (isMobile) {
      
      if (imgDiv.parentNode !== anchor) {
        anchor.insertBefore(imgDiv, anchor.firstChild);
      }
    } else {

      if (imgDiv.parentNode !== containerLabel) {
        containerLabel.insertBefore(imgDiv, containerLabel.firstChild);
      }
    }
  });
}


moveCaseStudiesImg();


window.addEventListener('resize', moveCaseStudiesImg);

document.addEventListener("DOMContentLoaded", () => {
    // ======== Textos ========
    const elements = document.querySelectorAll(".tituloPost, .apresentPost, .escopoCorpo, .textopadrao");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // anima apenas uma vez
            }
        });
    }, {
        threshold: 0.2 // 20% do elemento visível
    });

    elements.forEach(el => observer.observe(el));

    // ======== Imagens ========
    const imagens = document.querySelectorAll("#imagemPostGrande, #imagemPostLateral");

    const observerImgs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visibleScale");
                observerImgs.unobserve(entry.target); // anima apenas uma vez
            }
        });
    }, {
        threshold: 0.3 // 30% do elemento visível
    });

    imagens.forEach(img => observerImgs.observe(img));
});


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