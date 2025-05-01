// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links-list');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            // Toggle the active class on the nav links list
            navLinks.classList.toggle('mobile-menu-active');

            // Toggle aria-expanded attribute for accessibility
            const isExpanded = navLinks.classList.contains('mobile-menu-active');
            menuButton.setAttribute('aria-expanded', isExpanded);

            // Optional: Change button text/icon (e.g., to 'X')
            if (isExpanded) {
                menuButton.innerHTML = '×'; // Change to 'X' icon
            } else {
                menuButton.innerHTML = '☰'; // Change back to hamburger
            }
        });

        // Optional: Close menu if a link is clicked (useful for single-page apps, but good practice)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('mobile-menu-active')) {
                    navLinks.classList.remove('mobile-menu-active');
                    menuButton.setAttribute('aria-expanded', 'false');
                    menuButton.innerHTML = '☰'; // Reset button icon
                }
            });
        });
    } else {
        console.error("Mobile menu button or nav links not found!");
    }
});