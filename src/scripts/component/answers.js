module.exports = function () {
  const answersBlock = document.querySelector('.answers_list');
  const answersItems = document.querySelectorAll('.answers_item');
  const answersTriger = document.querySelectorAll('.answers_item-title');

  if (answersBlock) {
    answersItems[0].classList.add('answers_item-active');

    for (let i = 0; i < answersItems.length; i++) {
      answersTriger[i].addEventListener('click', function () {
        for (let i = 0; i < answersItems.length; i++) {
          answersItems[i].classList.remove('answers_item-active');
        }
        answersItems[i].classList.add('answers_item-active');
      })
    }
  }
}