document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-card');
  const layers = [
    document.getElementById('layer-outer'),
    document.getElementById('layer-inside'),
    document.getElementById('layer-diagram')
  ];
  const indicators = document.querySelectorAll('.indicator-dot');

  function updateScrollytelling() {
    // Titik picu tengah layar dinamis yang responsif untuk laptop maupun HP
    const triggerPoint = window.innerHeight * 0.45;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();

      // Periksa apakah kartu sedang melintasi area tengah pandangan layar
      if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
        // 1. Perbarui status aktif kartu teks
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        // 2. Ganti visual gambar secara mulus
        layers.forEach((layer, lIdx) => {
          if (lIdx === index) {
            layer.classList.add('active');
          } else {
            layer.classList.remove('active');
          }
        });

        // 3. Perbarui posisi titik indikator navigasi
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

  // Pasang listener scroll dengan opsi performa tinggi
  window.addEventListener('scroll', updateScrollytelling, { passive: true });
  
  // Jalankan satu kali saat halaman pertama kali dibuka
  updateScrollytelling();
});
