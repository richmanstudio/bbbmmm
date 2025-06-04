document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.book-table');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-modal');
  const form = document.querySelector('#reservation-form');

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    });
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
