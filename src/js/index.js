import '../scss/style.scss'

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

// swiper pagination
new Swiper('.swiper-container__brand', {
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true
  }
})
new Swiper('.swiper-container__equipment', {
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true
  }
})
new Swiper('.swiper-container__prais', {
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true
  }
})

// раскрытие блока текста article__stori

let storiOpen = document.querySelector('.article__stori-opening')
let readShow = document.querySelector('.article__button-read-show')

readShow.addEventListener('click', function () {
  storiOpen.classList.toggle('article__stori-opening-active')
  readShow.classList.toggle('article__button-read-hide')
  if (readShow.classList.toggle('article__button-read-show')) {
    readShow.textContent = 'Читать далее'
  } else {
    readShow.textContent = 'Скрыть'
  }
})

// раскрытие блока с брендами brand-repair

let brandiOpen = document.querySelector('.brand-repair')
let containerBrandOpen = document.querySelector('.swiper-container__brand')
let swiperBrandOpen = document.querySelector('.swiper-wrapper__brand')
let brandShow = document.querySelector('.brand__button-show')

brandShow.addEventListener('click', function () {
  brandiOpen.classList.toggle('brand-repair-active')
  containerBrandOpen.classList.toggle('swiper-container__brand-active')
  swiperBrandOpen.classList.toggle('swiper-wrapper__brand-active')
  brandShow.classList.toggle('brand__button-hide')
  if (brandShow.classList.toggle('brand__button-show')) {
    brandShow.textContent = 'Показать все'
  } else {
    brandShow.textContent = 'Скрыть'
  }
})

// раскрытие блока различных видов техники equipment-repair

let equipmentiOpen = document.querySelector('.equipment-repair')
let containerEquipmentdOpen = document.querySelector(
  '.swiper-container__equipment'
)
let equipmentShow = document.querySelector('.equipment__button-show')

equipmentShow.addEventListener('click', function () {
  equipmentiOpen.classList.toggle('equipment-repair-active')
  containerEquipmentdOpen.classList.toggle('swiper-container__equipment-active')
  equipmentShow.classList.toggle('equipment__button-hide')
  if (equipmentShow.classList.toggle('equipment__button-show')) {
    equipmentShow.textContent = 'Показать все'
  } else {
    equipmentShow.textContent = 'Скрыть'
  }
})

// модалка обратная связь

let modalFeedbackOpen = document.querySelector('.my-button__burger-footer-chat')
let feedbackOpen = document.querySelector('.feedback')
let modalFeedbackClose = document.querySelector('.my-button__feedback-close')

modalFeedbackOpen.addEventListener('click', function () {
  feedbackOpen.classList.add('feedback-active')
})
modalFeedbackClose.addEventListener('click', function () {
  feedbackOpen.classList.remove('feedback-active')
})

// модалка заказать звонок

let modalCallkOpen = document.querySelector('.my-button__burger-footer-call')
let callkOpen = document.querySelector('.back-call')
let modalCallClose = document.querySelector('.my-button__back-call-close')

modalCallkOpen.addEventListener('click', function () {
  callkOpen.classList.add('back-call-active')
})
modalCallClose.addEventListener('click', function () {
  callkOpen.classList.remove('back-call-active')
})

// раскрытие блока burger

let buttonBurgerOpen = document.querySelector('.my-button__burger')
let burgerMenuOpen = document.querySelector('.burger')
let burgerMenuClose = document.querySelector(
  '.my-button__burger-header-burger-x'
)

buttonBurgerOpen.addEventListener('click', function () {
  burgerMenuOpen.classList.add('burger-active')
})
burgerMenuClose.addEventListener('click', function () {
  burgerMenuOpen.classList.remove('burger-active')
})

// Блокировка прокрутки при определенном media-запросе
const mediaQuery = window.matchMedia('(min-width: 1440px)')
function handleMediaQuery() {
  const body = document.querySelector('body')
  if (mediaQuery.matches) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = ''
  }
}
handleMediaQuery()
mediaQuery.addListener(handleMediaQuery)
