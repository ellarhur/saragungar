// Main application JavaScript – headerbild + nav-färg vid scroll, hamburger-stängning
// Anropas från React (App.jsx) när DOM är monterad.

export function initApp() {
    const headerImage = document.querySelector('.header-image');
    const headerElement = document.querySelector('header');
    const imageTargets = Array.from(document.querySelectorAll('[data-header-image]'));
    const navTargets = Array.from(document.querySelectorAll('[data-nav-bg]'));
    const navToggle = document.getElementById('nav-toggle');
    const navLinksMenu = document.querySelector('.nav-links');
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));

    if (!headerElement) {
        return;
    }

    const defaultSrc = headerImage?.getAttribute('src');
    const defaultSrcMobile = headerElement.dataset.headerDefaultImageMobile || defaultSrc;
    const defaultNavBg =
        headerElement.dataset.navDefaultBg || window.getComputedStyle(headerElement).backgroundColor;

    const updateHeaderImage = () => {
        const isMobile = window.innerWidth <= 768;
        const headerOffset = (headerElement?.offsetHeight || 0) + 12;
        const triggerLeeway = isMobile
            ? Math.max(window.innerHeight * 0.35, 320)
            : Math.max(window.innerHeight * 0.2, 220);
        const triggerPoint = headerOffset + triggerLeeway;
        let activeSrc = isMobile ? defaultSrcMobile : defaultSrc;
        let activeNavBg = defaultNavBg;

        imageTargets.forEach((target) => {
            const rect = target.getBoundingClientRect();
            if (rect.top <= triggerPoint) {
                const src = isMobile && target.getAttribute('data-header-image-mobile')
                    ? target.getAttribute('data-header-image-mobile')
                    : target.getAttribute('data-header-image');
                activeSrc = src || activeSrc;
            }
        });

        navTargets.forEach((target) => {
            const rect = target.getBoundingClientRect();
            if (rect.top <= triggerPoint) {
                activeNavBg = target.getAttribute('data-nav-bg') || activeNavBg;
            }
        });

        if (activeSrc && headerImage && headerImage.getAttribute('src') !== activeSrc) {
            headerImage.setAttribute('src', activeSrc);
        }

        if (activeNavBg) {
            if (headerElement.style.backgroundColor !== activeNavBg) {
                headerElement.style.backgroundColor = activeNavBg;
            }
            if (navLinksMenu && navLinksMenu.style.backgroundColor !== activeNavBg) {
                navLinksMenu.style.backgroundColor = activeNavBg;
            }
        }
    };

    let isTicking = false;
    const onScroll = () => {
        if (isTicking) return;
        isTicking = true;
        window.requestAnimationFrame(() => {
            updateHeaderImage();
            isTicking = false;
        });
    };

    updateHeaderImage();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    if (navToggle && navLinks.length > 0) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });
    }
}
