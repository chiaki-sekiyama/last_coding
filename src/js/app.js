'use strict';

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