module.exports = function () {
  const bntCategory = document.querySelector('.catalog_categories-btn');
  const catalogLinksList = document.querySelector('.catalog_categories');

  if (bntCategory) {
    bntCategory.addEventListener('click', function () {
      catalogLinksList.classList.toggle('catalog_categories--active');
      bntCategory.classList.toggle('catalog_categories-btn--active');
    })
  }
}