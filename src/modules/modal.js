'use strict'

const modal = () => {
    const popup = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const btnPopupClose = document.querySelector('.popup-close')

    buttons.forEach((button) => {
        button.addEventListener('click', () => { popup.style.display = 'block' })
    })

    btnPopupClose.addEventListener('click', () => { popup.style.display = 'none' })
}

export default modal