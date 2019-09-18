module.exports = function () {
  const stockBlock = document.querySelector('.stock');
  const stockBtnOpen = document.querySelector('.stock-btn');
  const stockBtnCross = document.querySelector('.stock_cross');

  stockBtnOpen.addEventListener('click', function (e) {
    e.preventDefault();
    stockBlock.classList.add('stock--active');
  });

  stockBtnCross.addEventListener('click', function (e) {
    stockBlock.classList.remove('stock--active');
  });

}