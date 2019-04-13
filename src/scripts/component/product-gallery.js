module.exports = function () {

  $('.main-product_gallery-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.main-product_gallery-nav'
  });
  $('.main-product_gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 0,
    centerPadding: 0,
    vertical: true,
    asNavFor: '.main-product_gallery-main',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

}