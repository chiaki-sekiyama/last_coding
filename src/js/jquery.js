$(function() {
  /* ナビオープン */
  $('.humburger').on('click', function() {
    $(this).parents('.header').toggleClass('nav-open');
  });
  /* トップ画像スライダー */
  $('.top-slider').each(function() {
    const slides = $(this).find('img');
    const slideCount = slides.length;
    const currentIndex = 0;
    slides.eq(currentIndex).fadeIn();
    slideShow(slides, currentIndex, slideCount);
  });
  function slideShow(slides, currentIndex, slideCount) {
    setInterval(() => {
      currentIndex = showNextSlide(slides, currentIndex, slideCount);
    }, 4000);
  }
  function showNextSlide(slides, currentIndex, slideCount) {
    const nextIndex = (currentIndex + 1) % slideCount;
    slides.eq(currentIndex).fadeOut();
    slides.eq(nextIndex).fadeIn();
    return nextIndex;
  }
  /* productsタブメニュー */
  $('.p-btn').on('click', function() {
    const index = $('.p-btn').index(this);

    $('.p-btn').removeClass('is-select');
    $(this).addClass('is-select');
    $('.lineup__items').removeClass('is-select');
    $('.lineup__items').eq(index).addClass('is-select');
  });
  /* faqのアクション */
  $('.faq-btn').on('click', function() {
    $(this).toggleClass('is-open', 200);
  });
  /* トップに戻る */
  $('#to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});