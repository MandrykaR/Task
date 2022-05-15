'use strict';


document.addEventListener('DOMContentLoaded', () => {

   const modalTriger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]'),
      modalText = document.querySelector('.modal__text'),
      modalReset = document.querySelector('.reset__btn');

   let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

   function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      counter++;
      localStorage.setItem('counter', counter);
      modalText.innerHTML = `You have clicked <b>${counter} times</b> to related button.`;
      if (counter >= 5) {
         modalReset.classList.remove('hide');
      } else {
         modalReset.classList.add('hide');
      }
   }

   modalReset.addEventListener('click', () => {
      counter = 0;
      localStorage.setItem('counter', counter);
      closeModal();
   });

   function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
   }

   modalTriger.addEventListener('click', openModal);
   modalClose.addEventListener('click', closeModal);

   modal.addEventListener('click', (e) => {
      if (e.target === modal) {
         closeModal();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
         closeModal();
      }
   });

});