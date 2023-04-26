'usr strict';

$(function() {
  /* ナビオープン */
  $('.humburger').on('click', function() {
    $(this).parents('.header').toggleClass('nav-open');
  });
  /* トップ画像スライダー */
  $('.top-img1').each(function() {
    let $slides = $(this).find('img'),
    slideCount = $slides.length,
    currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 4000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
  $('.top-img2').each(function() {
    let $slides = $(this).find('img'),
    slideCount = $slides.length,
    currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 4000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
  $('.top-img3').each(function() {
    let $slides = $(this).find('img'),
    slideCount = $slides.length,
    currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 4000);

    function showNextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
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
});

/* 順番に表示 */
const letters = document.querySelectorAll('.fade-delay');

for (let i = 0; i < letters.length; i++) {
  const keyframes = {
    opacity: [0, 1]
  };

  const option = {
    duration: 600,
    delay: i * 100,
    fill: 'forwards'
  };
  letters[i].animate(keyframes, option);
}

/* セクションタイトル */

const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4
};

const fadeLetter = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('target');
    }
  });
};

const fadeObserver = new IntersectionObserver(fadeLetter, option);
const fadeElements = document.querySelectorAll('.sec-title');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

/* トップに戻る */
$('#to-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});