module.exports = function () {
  const btnOrder = document.querySelector('.main-product_order-btn'); //Кнопка оформления заказа
  const btnPreOrder = document.querySelector('.main-product_preorder-btn'); //Кнопка оформления рассрочки

  const formTitle = document.querySelector('.product-form_title'); //Текст на вызваной форме

  const productTitle = document.querySelector('.main-product_description-title') //Название товара





  const productTitleInput = document.querySelector('.product-form_product-name'); //Инпут который принимает название продукта
  const formTitleInput = document.querySelector('.product-form_type'); //Инпут который принимает тип формы

  const formWraper = document.querySelector('.product-form'); //Контейнер формы
  const formCross = document.querySelector('.product-form_cross'); //Крестик закрытия формы

  if (btnOrder) {

    btnOrder.addEventListener('click', function (e) {
      e.preventDefault();
      formTitle.innerHTML = 'Оформить заказ';
      formWraper.classList.add('product-form--active');


      productTitleInput.value = productTitle.textContent;;
      formTitleInput.value = formTitle.textContent;
    });


    btnPreOrder.addEventListener('click', function (e) {
      e.preventDefault();
      formTitle.innerHTML = 'Оформить рассрочку';
      formWraper.classList.add('product-form--active');

      productTitleInput.value = productTitle.textContent;
      formTitleInput.value = formTitle.textContent;
    });


    formCross.addEventListener('click', function () {
      formWraper.classList.remove('product-form--active');
    });
  }



  /**Сабмит формы заказа*/
  $('.product-form_form').on('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');
    const formWrap = document.querySelector('.product-form');

    function closePopup() {
      popupBlock.classList.remove('popup-success--active');
      if (formWrap) {
        formWrap.classList.remove('product-form--active');
      }
      document.querySelector('.product-form_form').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      setTimeout(closePopup, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      setTimeout(closePopup, 2500);
    })
  };

}