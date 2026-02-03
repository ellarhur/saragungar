// Enkel parallax scroll effekt
function initParallax() {
    console.log('Initializing parallax...');
    
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    console.log('Found parallax elements:', parallaxElements.length);
    
    if (parallaxElements.length === 0) {
        console.error('No parallax elements found!');
        return;
    }
    
    function updateParallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        parallaxElements.forEach((element, index) => {
            // Enkel parallax-effekt
            const speed = 0.5;
            const yPos = scrollTop * speed;
            
            // Testa både transform och background-position
            element.style.transform = `translateY(${yPos}px)`;
            
            // Debug - logga bara första elementet för att inte spamma
            if (index === 0 && scrollTop % 100 < 10) {
                console.log(`Scroll: ${scrollTop}, Transform: translateY(${yPos}px)`);
            }
        });
    }
    
    // Lägg till scroll listener
    window.addEventListener('scroll', updateParallax, { passive: true });
    console.log('Scroll listener added');
    
    // Testa direkt
    updateParallax();
}

// Kör när DOM är redo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
} else {
    initParallax();
}
    
    // Fade-in effekt för parallax content
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observera parallax content för fade-in effekt
    document.querySelectorAll('.parallax-content').forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
        content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(content);
    });
});

// Smooth scroll för navigation
document.addEventListener('DOMContentLoaded', function() {
    // Uppdatera alla interna länkar för smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});