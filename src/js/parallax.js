// Parallax: bakgrunden rör sig långsammare än sidan (som stefanboman.com)
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    if (parallaxElements.length === 0) return;

    // Hur mycket långsammare bakgrunden ska röra sig (0.2–0.4 ger tydlig parallax)
    const speed = 0.35;

    let ticking = false;
    function updateParallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        parallaxElements.forEach((element) => {
            const section = element.closest('.parallax-section');
            if (!section) return;

            const sectionTop = section.offsetTop;

            // Hur långt vi skrollat "in i" sektionen – bakgrunden följer långsammare
            const scrollIntoSection = scrollTop - sectionTop;
            const yOffset = Math.max(0, scrollIntoSection * speed);

            element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        });

        ticking = false;
    }

    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateParallax);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateParallax();
}

// Fade-in för text i parallax-sektioner
function initParallaxContentFade() {
    const contents = document.querySelectorAll('.parallax-content');
    if (contents.length === 0) return;

    contents.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    contents.forEach((content) => observer.observe(content));
}

// Smooth scroll för #-länkar
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initParallax();
        initParallaxContentFade();
        initSmoothScroll();
    });
} else {
    initParallax();
    initParallaxContentFade();
    initSmoothScroll();
}
