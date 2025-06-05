document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.book-table');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-modal');
  const form = document.querySelector('#reservation-form');
  const hero = document.querySelector('.hero');
  const reveals = document.querySelectorAll('.reveal');

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    });
  }

  if (hero) {
    const images = hero.dataset.images.split(';');
    let idx = 0;
    hero.style.backgroundImage = `url(${images[idx]})`;
    setInterval(() => {
      idx = (idx + 1) % images.length;
      hero.style.backgroundImage = `url(${images[idx]})`;
    }, 5000);
  }

  if (reveals.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за бронирование! Мы свяжемся с вами.');
      modal.classList.remove('active');
      form.reset();
    });
  }
});
