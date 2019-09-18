module.exports = function () {
  /**Сабмит форм обратной связи*/
  $('.form_wrap').on('submit', submitMainForm);

  function submitMainForm(e) {
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
      document.querySelector('.form_wrap').reset();
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