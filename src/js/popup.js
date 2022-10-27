let popupLinks = document.querySelectorAll('.popup-open')
let popupCloseIcon = document.querySelectorAll('.popup-close')

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '')
      const curentPopup = document.getElementById(popupName)
      popupOpen(curentPopup)
      e.preventDefault()
    })
  }
}
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault();
    })
  }
}
function popupOpen(curentPopup) {
  if (curentPopup) {
    const popupActive = document.querySelector('.popup.popup-opened')
    if (popupActive) {
      popupClose(popupActive, false)
    }
    curentPopup.classList.add('popup-opened')
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'))
      }
    })
  }
}
function popupClose(popupActive) {
  popupActive.classList.remove('popup-opened')
}
