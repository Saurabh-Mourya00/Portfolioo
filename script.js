// JavaScript for Portfolio Website

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to navigation links based on scroll position
function updateActiveNavLink() {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop - 100; // Account for navbar height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Add active class styling
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--accent) !important;
    font-weight: 600;
  }
`;
document.head.appendChild style;

// Update active link on scroll and load
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);