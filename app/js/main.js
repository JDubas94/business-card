const popups = [
  { buttonId: 'popup-one__open', popupId: 'popup-one' },
  { buttonId: 'popup-two__open', popupId: 'popup-two' },
  { buttonId: 'popup-three__open', popupId: 'popup-three' },
  { buttonId: 'popup-four__open', popupId: 'popup-four' },
  { buttonId: 'popup-five__open', popupId: 'popup-five' },
  { buttonIds: ['popub-top__open--btn1', 'popup-top__open--btn2'], popupId: 'popup-top' }
];

const body = document.body;

function openPopup(popup) {
  popup.style.display = 'flex';
  body.style.overflow = 'hidden';
}

function closePopup(popup) {
  popup.style.display = 'none';
  body.style.overflow = '';
}



popups.forEach(({ buttonId, popupId }) => {
  const button = document.getElementById(buttonId);
  const popup = document.getElementById(popupId);

  if (button && popup) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup(popup);
    });

    const closeButton = popup.querySelector('.popup__btn-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => closePopup(popup));
    }

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup(popup);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePopup(popup);
      }
    });
  }
});

const popupTop = document.querySelector('.popup-top');
const popupTopButtons = document.querySelectorAll('.popup-top__open--btn1, .popup-top__open--btn2');
const popupTopCloseButton = popupTop.querySelector('.popup__btn-close');

popupTopButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPopup(popupTop);
  });
});
popupTopCloseButton.addEventListener('click', () => closePopup(popupTop));
popupTop.addEventListener('click', (e) => {
  if (e.target === popupTop) {
    closePopup(popupTop);
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupTop.style.display === 'flex') {
    closePopup(popupTop);
  }
});

const links = document.querySelectorAll('.header__item-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const blockId = link.getAttribute('href');
    const block = document.querySelector(blockId);

    if (block) {

      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})


$(function () {
  $('.projects-tabs__top-item').on('click', function (e) {
    e.preventDefault()
    $('.projects-tabs__top-item').removeClass('projects-tabs__top-item--active');
    $(this).addClass('projects-tabs__top-item--active');

    $('.projects-tabs__content-item').removeClass('projects-tabs__content-item--active');
    $($(this).attr('href')).addClass('projects-tabs__content-item--active');
  })

});
