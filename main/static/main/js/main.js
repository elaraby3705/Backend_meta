// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if(stored === 'light') document.documentElement.classList.add('light-mode');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-mode');
  const isLight = document.documentElement.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Contact form handler (placeholder)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! This form is a placeholder. Replace with your backend or form service.');
});

// set initial icon
(function(){
  const isLight = document.documentElement.classList.contains('light-mode');
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
})();
