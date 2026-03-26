const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((el) => observer.observe(el));

const modelViewer = document.getElementById('ball3d');

let angle = 45;

function animateOrbit() {
    angle += 0.08;
    modelViewer.setAttribute('camera-orbit', `${angle}deg 75deg 40m`);
    requestAnimationFrame(animateOrbit);
}

modelViewer.addEventListener('load', () => {
    animateOrbit();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        const target = document.querySelector(id);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});