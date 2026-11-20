// Agencia Aster — efectos del tema "Producción": fondo fijo, luces LED y animaciones

(() => {
  // Capas fijas: escena de fondo, rieles LED y barra de progreso
  const layers = `
    <div class="scene" aria-hidden="true"><div class="scene__orb scene__orb--1"></div><div class="scene__orb scene__orb--2"></div></div>
    <div class="led-rail led-rail--l" aria-hidden="true"><span class="led-rail__runner"></span></div>
    <div class="led-rail led-rail--r" aria-hidden="true"></div>
    <div class="scroll-led" aria-hidden="true"></div>`;
  document.body.insertAdjacentHTML('afterbegin', layers);

  // Progreso de scroll -> barra superior y luz que baja por el riel izquierdo
  const root = document.documentElement;
  let ticking = false;
  const update = () => {
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty('--p', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();

  // Luz que sigue al cursor dentro de los recuadros
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.pain, .service, .post-card, .quote').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.removeProperty('--mx');
        el.style.removeProperty('--my');
      });
    });
  }

  // Leve parallax del dron del hero
  const drone = document.querySelector('.hero-drone');
  if (drone && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addEventListener('scroll', () => {
      drone.style.translate = `0 ${Math.min(scrollY, 900) * 0.25}px`;
    }, { passive: true });
  }
})();
