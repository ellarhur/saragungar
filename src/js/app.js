// Slideshow för inspirations-sidan
// Se över denna kod!

let slideIndex = 1;
showSlide(slideIndex);

// Automatisk slideshow - växlar var 5:e sekund
setInterval(function() {
    slideIndex++;
    if (slideIndex > 3) slideIndex = 1;
    showSlide(slideIndex);
}, 5fff);

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