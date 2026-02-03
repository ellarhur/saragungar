// Main application JavaScript
console.log('Sara Gungar website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    const headerImage = document.querySelector('.header-image');
    const headerElement = document.querySelector('header');
    const targets = Array.from(document.querySelectorAll('[data-header-image]'));

    if (!headerImage || !targets.length) {
        return;
    }

    const defaultSrc = headerImage.getAttribute('src');

    const updateHeaderImage = () => {
        const headerOffset = (headerElement?.offsetHeight || 0) + 12;
        let activeSrc = defaultSrc;

        targets.forEach((target) => {
            const rect = target.getBoundingClientRect();
            if (rect.top <= headerOffset) {
                activeSrc = target.getAttribute('data-header-image') || activeSrc;
            }
        });

        if (activeSrc && headerImage.getAttribute('src') !== activeSrc) {
            headerImage.setAttribute('src', activeSrc);
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