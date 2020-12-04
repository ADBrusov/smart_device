'use strict';
// Попап обратной связи
var popup = document.querySelector('.popup');
var callbackButton = document.querySelector('.page-header__callback-button');
var nameInputPopup = popup.querySelector('#name');

callbackButton.addEventListener('click', function () {
  var openPopup = function () {
    popup.classList.add('popup--active');
  };

  var closePopup = function () {
    popup.classList.remove('popup--active');
    popup.removeEventListener('click', popupCloseOnClick);
  };

  var popupCloseOnClick = function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  var popupCloseOnKey = function (evt) {
    if (evt.key === 'Escape' || evt.key === 'x') {
      closePopup();
    }
  };

  openPopup();
  popup.addEventListener('click', popupCloseOnClick);
  document.addEventListener('keydown', popupCloseOnKey);
  nameInputPopup.focus();
});

// Запись в LocalStorage
var form = document.querySelector('.callback__form');
var nameInput = form.querySelector('#name');
var telephoneInput = form.querySelector('#tel');
var answerArea = form.querySelector('#answer');

form.addEventListener('submit', function () {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('telephone', telephoneInput.value);
  localStorage.setItem('answer', answerArea.value);
});

// Маска для телефона


// Аккордеон для меню в футере
document.querySelectorAll('.accordeon__button').forEach(function (item) {
  item.addEventListener('click', function () {
    var parent = item.parentNode;

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
