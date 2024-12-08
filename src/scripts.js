// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue sur le site de la soirée Christian Louboutin !");
    
    // Récupération des éléments de la barre de navigation et des sections
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Fonction pour mettre à jour la classe active
    function updateActiveLink() {
        let current = '';

        // Déterminer la section visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // Mettre à jour les liens actifs
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Ajout d'un écouteur d'événement pour le défilement
    window.addEventListener('scroll', updateActiveLink);

    // Ajout d'un comportement au clic pour naviguer
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});