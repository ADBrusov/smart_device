'use strict';
(function () {
  // Попап обратной связи
  var popup = document.querySelector('.popup');
  var callbackButton = document.querySelector('.page-header__callback-button');
  var nameInputPopup = popup.querySelector('#name_popup');
  var closeButton = popup.querySelector('.callback__close-button');

  if (callbackButton && nameInputPopup && closeButton) {
    callbackButton.addEventListener('click', function () {
      var openPopup = function () {
        popup.classList.add('popup--active');
        nameInputPopup.focus();
        popup.addEventListener('click', closePopupOnClick);
        document.addEventListener('keydown', closePopupOnKey);
        closeButton.addEventListener('click', closePopup);
      };

      var closePopup = function () {
        popup.classList.remove('popup--active');
        popup.removeEventListener('click', closePopupOnClick);
        document.removeEventListener('keydown', closePopupOnKey);
        closeButton.removeEventListener('click', closePopup);
      };

      var closePopupOnClick = function (evt) {
        if (evt.target === evt.currentTarget) {
          closePopup();
        }
      };

      var closePopupOnKey = function (evt) {
        if (evt.key === 'Escape' || evt.key === 'x') {
          closePopup();
        }
      };

      openPopup();
    });
  }

  // Запись в LocalStorage и маска
  var forms = document.querySelectorAll('.callback__form');

  if (forms) {
    forms.forEach(function (form) {
      var nameInput = form.querySelector('input[name="name"]');
      var telephoneInput = form.querySelector('input[name="tel"]');
      var answerArea = form.querySelector('textarea[name="answer"]');

      if (telephoneInput && nameInput && answerArea) {
        form.addEventListener('submit', function () {
          localStorage.setItem('name', nameInput.value);
          localStorage.setItem('telephone', telephoneInput.value);
          localStorage.setItem('answer', answerArea.value);
        });

        telephoneInput.onfocus = function () {
          telephoneInput.value = '+7(';
        };

        telephoneInput.oninput = function () {
          if (telephoneInput.value.length === 6) {
            telephoneInput.value = telephoneInput.value + ')';
          }
        };
      }
    });
  }

  // Аккордеон для меню в футере
  var accordeons = document.querySelectorAll('.accordeon');

  if (accordeons) {
    accordeons.forEach(function (accordeon) {
      accordeon.classList.remove('accordeon--nojs');
    });
  }

  var accordeonButtons = document.querySelectorAll('.accordeon__button');

  if (accordeonButtons) {
    accordeonButtons.forEach(function (accordeonButton) {
      accordeonButton.addEventListener('click', function () {
        var parent = accordeonButton.parentNode;

        if (parent.classList.contains('accordeon--active')) {
          parent.classList.remove('accordeon--active');
        } else {
          document.querySelectorAll('.accordeon').forEach(function (child) {
            child.classList.remove('accordeon--active');
          });
          parent.classList.add('accordeon--active');
        }
      });
    });
  }
})();
