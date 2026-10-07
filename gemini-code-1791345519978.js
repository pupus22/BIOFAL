document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-card');
  const layers = [
    document.getElementById('layer-outer'),
    document.getElementById('layer-inside'),
    document.getElementById('layer-diagram')
  ];
  const indicators = document.querySelectorAll('.indicator-dot');

  function updateScrollytelling() {
    const triggerBottom = window.innerHeight * 0.6;
    const triggerTop = window.innerHeight * 0.2;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();

      // Memeriksa step card mana yang sedang berada di tengah viewport
      if (rect.top <= triggerBottom && rect.bottom >= triggerTop) {
        // Update Step Card State
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        // Update Visual Layer (Cross-fade transisi gambar)
        layers.forEach((layer, lIdx) => {
          if (lIdx === index) {
            layer.classList.add('active');
          } else {
            layer.classList.remove('active');
          }
        });

        // Update Navigasi Dot
        indicators.forEach((dot, dIdx) => {
          if (dIdx === index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateScrollytelling, { passive: true });
  updateScrollytelling();
});