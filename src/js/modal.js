document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.subscribe-form');
  const modalOverlay = document.querySelector('.subscription-modal');
  const modalCloseIcon = document.querySelector('.subscription-close');
  const modalCloseBtn = document.querySelector('.subscription-btn');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.checkValidity()) {
      modalOverlay.classList.add('subscription-open');
      form.reset();
    }
  });

  [modalCloseIcon, modalCloseBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlay.classList.remove('subscription-open');
    });
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('subscription-open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modalOverlay.classList.remove('subscription-open');
    }
  });
});
