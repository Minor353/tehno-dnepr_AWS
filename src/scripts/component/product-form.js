module.exports = function () {
  const btnOrder = document.querySelector('.main-product_order-btn'); //Кнопка оформления заказа
  const btnPreOrder = document.querySelector('.main-product_preorder-btn'); //Кнопка оформления рассрочки

  const formTitle = document.querySelector('.product-form_title'); //Текст на вызваной форме

  if (btnOrder) {
    const productTitle = document.querySelector('.main-product_description-title').textContent; //Название товара
  };




  const productTitleInput = document.querySelector('.product-form_product-name'); //Инпут который принимает название продукта
  const formTitleInput = document.querySelector('.product-form_type'); //Инпут который принимает тип формы

  const formWraper = document.querySelector('.product-form'); //Контейнер формы
  const formCross = document.querySelector('.product-form_cross'); //Крестик закрытия формы

  if (btnOrder) {

    btnOrder.addEventListener('click', function (e) {
      e.preventDefault();
      formTitle.innerHTML = 'Оформить заказ';
      formWraper.classList.add('product-form--active');


      productTitleInput.value = productTitle;
      formTitleInput.value = formTitle.textContent;
    });


    btnPreOrder.addEventListener('click', function (e) {
      e.preventDefault();
      formTitle.innerHTML = 'Оформить рассрочку';
      formWraper.classList.add('product-form--active');

      productTitleInput.value = productTitle;
      formTitleInput.value = formTitle.textContent;
    });


    formCross.addEventListener('click', function () {
      formWraper.classList.remove('product-form--active');
    });
  }
}