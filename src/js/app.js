// Main application JavaScript
console.log('Sara Gungar website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    const headerImage = document.querySelector('.header-image');
    const headerElement = document.querySelector('header');
    const imageTargets = Array.from(document.querySelectorAll('[data-header-image]'));
    const navTargets = Array.from(document.querySelectorAll('[data-nav-bg]'));

    if (!headerElement) {
        return;
    }

    const defaultSrc = headerImage?.getAttribute('src');
    const defaultNavBg =
        headerElement.dataset.navDefaultBg || window.getComputedStyle(headerElement).backgroundColor;

    const updateHeaderImage = () => {
        const isMobile = window.innerWidth <= 767;
        const headerOffset = (headerElement?.offsetHeight || 0) + 12;
        // Earlier trigger on mobile: use larger viewport-based buffer
        const triggerLeeway = isMobile
            ? Math.max(window.innerHeight * 0.35, 320)
            : Math.max(window.innerHeight * 0.2, 220);
        const triggerPoint = headerOffset + triggerLeeway;
        let activeSrc = defaultSrc;
        let activeNavBg = defaultNavBg;

        imageTargets.forEach((target) => {
            const rect = target.getBoundingClientRect();
            if (rect.top <= triggerPoint) {
                activeSrc = target.getAttribute('data-header-image') || activeSrc;
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

        if (activeNavBg && headerElement.style.backgroundColor !== activeNavBg) {
            headerElement.style.backgroundColor = activeNavBg;
        }
    };

    let isTicking = false;
    const onScroll = () => {
        if (isTicking) {
            return;
        }
        isTicking = true;
        window.requestAnimationFrame(() => {
            updateHeaderImage();
            isTicking = false;
        });
    };

    updateHeaderImage();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
});