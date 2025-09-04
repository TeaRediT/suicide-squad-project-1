document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.subscribe-form');
  const modalOverlay = document.querySelector('.subscription-modal');
  const modalCloseIcon = document.querySelector('.subscription-close');
  const modalCloseBtn = document.querySelector('.subscription-btn');

  // Відкриваємо модалку після успішної валідації
  form.addEventListener('submit', e => {
    e.preventDefault(); // блокуємо реальну відправку
    if (form.checkValidity()) {
      modalOverlay.classList.add('subscription-open');
      form.reset(); // очищаємо поле після підписки (опціонально)
    }
  });

  // Закриття модалки
  [modalCloseIcon, modalCloseBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlay.classList.remove('subscription-open');
    });
  });

  // Закриття по кліку на фон
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('subscription-open');
    }
  });

  // Закриття по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modalOverlay.classList.remove('subscription-open');
    }
  });
});
