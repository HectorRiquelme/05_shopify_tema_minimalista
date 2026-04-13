/**
 * Tema Minimalista - JavaScript Principal
 * Autor: Hector Riquelme
 */

(function () {
  'use strict';

  /* --- Menu movil --- */
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.site-header__nav');

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      const isOpen = nav.classList.contains('is-open');
      this.setAttribute('aria-expanded', isOpen);
    });
  }

  /* --- Galeria de producto --- */
  const mainImage = document.querySelector('.product-gallery__main img');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      const newSrc = this.dataset.fullSrc;
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
        mainImage.srcset = '';
        thumbs.forEach(function (t) { t.classList.remove('is-active'); });
        this.classList.add('is-active');
      }
    });
  });

  /* --- Selector de cantidad --- */
  document.querySelectorAll('.product-quantity').forEach(function (wrapper) {
    const input = wrapper.querySelector('.product-quantity__input');
    const btnMinus = wrapper.querySelector('[data-action="decrease"]');
    const btnPlus = wrapper.querySelector('[data-action="increase"]');

    if (!input) return;

    if (btnMinus) {
      btnMinus.addEventListener('click', function () {
        const val = parseInt(input.value, 10) || 1;
        if (val > 1) input.value = val - 1;
      });
    }

    if (btnPlus) {
      btnPlus.addEventListener('click', function () {
        const val = parseInt(input.value, 10) || 1;
        input.value = val + 1;
      });
    }
  });

  /* --- Formulario de newsletter --- */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !emailInput.value.trim()) {
        e.preventDefault();
        emailInput.focus();
      }
    });
  });

  /* --- Animaciones al hacer scroll --- */
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal-on-scroll');
    reveals.forEach(function (el) {
      var windowHeight = window.innerHeight;
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('is-visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

})();
