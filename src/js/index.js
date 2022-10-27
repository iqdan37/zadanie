import '../scss/style.scss';
import './popup.js'

import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const sliders = document.querySelectorAll('.swiper');
let mySwipers = []

function sliderinit() {
  sliders.forEach((slider, index) => {
    if (!slider.swiper) {
      mySwipers[index] = new Swiper(slider, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    } else {
      return
    }
  })
}

function sliderDestroy() {
  sliders.forEach((slider, index) => {
    if (slider.classList.contains("swiper-initialized")) mySwipers[index].destroy(true, true)
  })

}
function checker() {
  if (window.matchMedia("(min-width: 321px)").matches) {
    sliderDestroy()
  } else {
    sliderinit()
  }
}

checker();
window.addEventListener('resize', () => {
  checker();
});

let swiperWrapper = document.querySelector('.swiper-wrapper');
let open = document.querySelector('.slider__button');

open.addEventListener('click', () => {
  open.classList.toggle('hidden')
  swiperWrapper.classList.toggle('swiper--opened')
  open.textContent = !swiperWrapper.classList.contains('swiper--opened') ? 'Показать все' : 'Скрыть'
})

let textMore = document.querySelector('.services__btn-more')
let serviseText = document.querySelector('.services__text')

textMore.addEventListener('click', () =>{
  textMore.classList.toggle('hidden')
  serviseText.classList.toggle('text__open')
  textMore.textContent = !serviseText.classList.contains('text__open') ? 'Читать далее' : 'Скрыть'
})

let techniks = document.querySelector('.techniks__wrapper');
let opened = document.querySelector('.techniks__button');

opened.addEventListener('click', () => {
  opened.classList.toggle('hidden')
  techniks.classList.toggle('techniks--open')
  opened.textContent = !techniks.classList.contains('techniks--open') ? 'Показать все' : 'Скрыть'
})
