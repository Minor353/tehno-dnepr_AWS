module.exports = function () {
  const catalog = document.querySelector('.catalog');
  const catalogCategories = document.querySelectorAll('.catalog_categories-link');
  const catalogItems = document.querySelectorAll('.catalog_list');

  if (catalog) {
    for (let i = 0; i < catalogItems.length; i++) {
      catalogCategories[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let i = 0; i < catalogItems.length; i++) {
          catalogCategories[i].classList.remove('catalog_categories-link--active');
          catalogItems[i].classList.remove('catalog_list--active');
        }

        catalogCategories[i].classList.add('catalog_categories-link--active');
        catalogItems[i].classList.add('catalog_list--active');

        catalogList.classList.toggle('catalog_categories--active');
        catalogBtn.classList.toggle('catalog_categories-btn--active');
      })
    }
  }

  /*******************************************************/

  const catalogBtn = document.querySelector('.catalog_categories-btn');
  const catalogList = document.querySelector('.catalog_categories');

  if (catalogList) {
    catalogBtn.addEventListener('click', function () {
      catalogList.classList.toggle('catalog_categories--active');
      catalogBtn.classList.toggle('catalog_categories-btn--active');
    });


  }
}