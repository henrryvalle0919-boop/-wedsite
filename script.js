// Smooth scroll for all internal links (#...)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active menu link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveLink() {
    let currentId = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            currentId = section.id;
        }
    });

    navLinks.forEach(link => {
        const hrefId = link.getAttribute('href').slice(1);
        if (hrefId === currentId) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// MOBILE MENU (HAMBURGER)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
    hamburger.classList.toggle('open');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        hamburger.classList.remove('open');
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    'section, .work-img, .service-box, .why-box, .review-box, .contact-layout, .standing-by'
);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// FORCE FIX: ensure images always load above background
document.querySelectorAll('.work-img').forEach(img => {
    img.style.zIndex = "10";
    img.style.position = "relative";
    img.style.opacity = "1";
});
