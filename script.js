const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const revealItems = document.querySelectorAll('.reveal');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('#contactForm');
const darkModeToggle = document.querySelector('#darkModeToggle');

// Dark mode functionality
const initDarkMode = () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
  }
};

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  });
}

initDarkMode();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const updateActiveNavigation = () => {
  const scrollPosition = window.scrollY + 180;
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      navItems.forEach((item) => item.classList.toggle('active', item.getAttribute('href') === `#${section.id}`));
    }
  });
  header.classList.toggle('scrolled', window.scrollY > 30);
};

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((filterButton) => filterButton.classList.toggle('active', filterButton === button));
    projectCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
}, { passive: true });

// Contact form submission handler
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
initDarkMode();
