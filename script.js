// 1. SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));


// 2. INNOVATIONS TABS LOGIC (NEW)
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding content
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

// ... keep your existing Scroll and Tab code ...

// 4. HERO IMAGE SLIDER (5 Seconds)
const slides = document.querySelectorAll('.hero-img');
let currentSlide = 0;

if (slides.length > 0) {
    setInterval(() => {
        // 1. Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // 2. Calculate next slide index (loop back to 0 if at end)
        currentSlide = (currentSlide + 1) % slides.length;

        // 3. Add active class to next slide
        slides[currentSlide].classList.add('active');
    }, 5000); // 5000ms = 5 seconds
}
// 3. MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5,5,5,0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid #333';
        }
    });
}