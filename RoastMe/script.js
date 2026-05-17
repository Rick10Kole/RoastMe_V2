(function () {
     // Debug helper: ?scroll=NN scrolls instantly to NN px
  try {
    const params = new URLSearchParams(window.location.search);
    const sc = params.get('scroll');
    if (sc !== null) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.addEventListener('load', () => {
        setTimeout(() => window.scrollTo(0, parseInt(sc, 10) || 0), 100);
      });
    }
  } catch (e) {}
  
  const btn = document.getElementById('getPremiumBtn');
  const overlay = document.getElementById('premiumModal');
  const closeBtn = document.getElementById('modalClose');
  const ctaBtn = document.getElementById('modalCta');

  function openModal() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btn) btn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (ctaBtn) ctaBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile nav toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      mobileToggle.classList.toggle('is-active');
    });
  }
})();
