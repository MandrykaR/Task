'use strict';


document.addEventListener('DOMContentLoaded', () => {



   const modalTriger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');


   function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
   }

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