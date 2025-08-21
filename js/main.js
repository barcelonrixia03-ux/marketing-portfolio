// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}