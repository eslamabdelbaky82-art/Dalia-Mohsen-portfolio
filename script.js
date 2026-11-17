// Custom JS for Dalia Mohsen Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission simulation
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formAlert.classList.remove('d-none');
            contactForm.reset();
            setTimeout(() => {
                formAlert.classList.add('d-none');
            }, 5000);
        });
    }
});

// Function to open project infographic in full-size modal
function showImageModal(imgSrc, title) {
    document.getElementById('modalProjectImg').src = imgSrc;
    document.getElementById('modalProjectTitle').textContent = title;
}
