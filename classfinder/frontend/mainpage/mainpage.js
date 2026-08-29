const menuButton = document.querySelector('.menu-btn');
const menuPanel = document.querySelector('.menu-panel');
const backdrop = document.querySelector('.app-backdrop');

if (menuButton && menuPanel && backdrop) {
    menuButton.addEventListener('click', () => {
        const isOpen = menuPanel.classList.toggle('is-open');
        menuButton.classList.toggle('is-active', isOpen);
        backdrop.classList.toggle('is-visible', isOpen);
    });

    backdrop.addEventListener('click', () => {
        menuPanel.classList.remove('is-open');
        menuButton.classList.remove('is-active');
        backdrop.classList.remove('is-visible');
    });
}

const cards = document.querySelectorAll('.place-card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `
            perspective(920px)
            translateY(-8px)
            scale(1.02)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${percentX}%`);
        card.style.setProperty('--mouse-y', `${percentY}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

const roomLinks = document.querySelectorAll('[data-room]');
roomLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const room = link.dataset.room;
        localStorage.setItem('selectedRoom', room);
    });
});

const queryParams = new URLSearchParams(window.location.search);
const selectedBlock = queryParams.get('block');

if (selectedBlock) {
    const summary = document.querySelector('[data-block-summary]');
    if (summary) {
        summary.textContent = `Block ${selectedBlock} • Study rooms available near your break`;
    }
}
