document.addEventListener('DOMContentLoaded', () => {
    // Navbar visual change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Springy intersection observer animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // Trigger hero animations on load
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('active'));
    }, 100);

    // Make the ticker continuous by duplicating content perfectly
    const tickerContent = document.querySelector('.ticker-content');
    if(tickerContent) {
        tickerContent.innerHTML += tickerContent.innerHTML;
    }
});
