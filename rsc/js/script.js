document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContainer = document.querySelector('.menu-container');

    menuIcon.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuContainer.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
    });
