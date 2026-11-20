// Agencia Aster — interacciones

// WhatsApp de Agencia Aster: +54 9 3873 64-4198
const WHATSAPP_NUMBER = '5493873644198';
const WHATSAPP_MESSAGE = 'Hola Aster, quiero contarles sobre mi proyecto.';

const waLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

document.querySelectorAll('.js-whatsapp').forEach((a) => {
  a.href = waLink();
  a.target = '_blank';
  a.rel = 'noopener';
});

// Los CTA de cada servicio abren WhatsApp con el servicio ya mencionado
document.querySelectorAll('.service__link[data-service]').forEach((a) => {
  a.href = waLink(`Hola Aster, me interesa ${a.dataset.service}. Quiero contarles sobre mi empresa.`);
  a.target = '_blank';
  a.rel = 'noopener';
});

// Header: fondo al hacer scroll
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menú mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Animaciones de entrada
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

// FAQ: una pregunta abierta a la vez
const faqs = document.querySelectorAll('.faq details');
faqs.forEach((d) => d.addEventListener('toggle', () => {
  if (d.open) faqs.forEach((o) => { if (o !== d) o.open = false; });
}));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
