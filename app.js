const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 5;
    const y = (e.clientY / window.innerHeight - 0.5) * 5;

    container.style.transform = `translate(${x}px, ${y}px)`;
});
const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
    light.style.left = e.clientX - 150 + 'px';
    light.style.top = e.clientY - 150 + 'px';
});

const words = ["vendem", "convertem", "impressionam", "escalam", "performam"];
const el = document.getElementById("changing-word");
let i = 0;

// 1. Popular o elemento com todas as palavras para permitir o slide
el.innerHTML = words.map(word => `<div class="word-item">${word}</div>`).join('');

// 2. Adicionar a primeira palavra ao final para um loop infinito suave
el.innerHTML += `<div class="word-item">${words[0]}</div>`;

const wordHeight = 1.2; // Deve ser o mesmo valor do CSS (em em ou px)

setInterval(() => {
    i++;
    el.style.transition = "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)";
    el.style.transform = `translateY(-${i * 1.2}em)`;

    // Quando chegar na "cópia" da primeira palavra, reseta sem animação
    if (i === words.length) {
        setTimeout(() => {
            el.style.transition = "none";
            el.style.transform = "translateY(0)";
            i = 0;
        }, 600); // Tempo igual ao da transição
    }
}, 2500);