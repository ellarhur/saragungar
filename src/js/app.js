// Slideshow för inspirations-sidan
// Se över denna kod!

let slideIndex = 1;
showSlide(slideIndex);

// Automatisk slideshow - växlar var 5:e sekund
setInterval(function() {
    slideIndex++;
    if (slideIndex > 3) slideIndex = 1;
    showSlide(slideIndex);
}, 5000);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slide-dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Newsletter form popup
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNewsletterPopup();
            newsletterForm.reset();
        });
    }
    
    // Active navigation link
    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Check if current page matches the link
        if (currentPath === linkPath || 
            (currentPath.includes('index.html') && linkPath.includes('index.html')) ||
            (currentPath.endsWith('/') && linkPath.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

function showNewsletterPopup() {
    const popup = document.createElement('div');
    popup.className = 'newsletter-popup';
    popup.innerHTML = `
        <div class="newsletter-popup-content">
            <h3>Tack för din prenumeration! 📧</h3>
            <p>Kolla din inkorg och bekräfta din prenumeration på nyhetsbrev.</p>
            <button class="popup-close-btn" onclick="closeNewsletterPopup()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
}

function closeNewsletterPopup() {
    const popup = document.querySelector('.newsletter-popup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}