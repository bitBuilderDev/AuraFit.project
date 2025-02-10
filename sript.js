
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(navToggle);

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    navToggle.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        document.querySelector('.nav-links').classList.remove('active');
        navToggle.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Modal for Join Now Button
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Get Started Today!</h2>
        <form id="signup-form">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <button type="submit"> ⬤