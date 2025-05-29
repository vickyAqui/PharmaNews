// Função para mostrar/ocultar o artigo completo
function showArticle() {
    const article = document.getElementById('fullArticle');
    const hero = document.querySelector('.hero');
    
    if (article.style.display === 'none') {
        article.style.display = 'block';
        hero.style.display = 'none';
        // Scroll suavemente para o artigo
        article.scrollIntoView({ behavior: 'smooth' });
    } else {
        article.style.display = 'none';
        hero.style.display = 'block';
        // Scroll suavemente para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Funções para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula o envio do formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simula uma requisição
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
});

// Funcionalidade do botão Voltar ao Topo
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Mostrar/ocultar o botão baseado no scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Ação de voltar ao topo
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const animateOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.article-card, .stat-item, .mission-box, .value-item').forEach(el => {
    el.classList.add('scroll-animate');
    animateOnScroll.observe(el);
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add 3D tilt effect to cards
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const dx = x - xc;
        const dy = y - yc;
        
        card.style.transform = `perspective(1000px) rotateX(${dy / 20}deg) rotateY(${dx / 20}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});