'use strict';
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
