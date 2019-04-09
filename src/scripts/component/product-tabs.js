module.exports = function () {
  const productTabsWrap = document.querySelector('.main-product_tabs');

  const productTabs = document.querySelectorAll('.main-product_tabs-list-item');
  const productTabsContent = document.querySelectorAll('.main-product_tabs-description-text');

  if (productTabsWrap) {
    productTabs[0].classList.add('main-product_tabs-list-item--active');
    productTabsContent[0].classList.add('main-product_tabs-description-text--active');

    for (let i = 0; i < productTabs.length; i++) {
      productTabs[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let i = 0; i < productTabs.length; i++) {
          productTabs[i].classList.remove('main-product_tabs-list-item--active');
          productTabsContent[i].classList.remove('main-product_tabs-description-text--active');
        }

        productTabs[i].classList.add('main-product_tabs-list-item--active');
        productTabsContent[i].classList.add('main-product_tabs-description-text--active');
      })
    }
  }
}