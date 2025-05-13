// Ejemplo: Animación al hacer scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + window.innerHeight / 1.3;

  sections.forEach(section => {
    if (scrollPos > section.offsetTop) {
      section.classList.add('visible');
    }
  });
});
