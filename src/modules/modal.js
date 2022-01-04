'use strict'
let opacity = 0
let posY = -5
const modal = () => {

    const popup = document.querySelector('.popup')
    const popupWindow = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const btnPopupClose = document.querySelector('.popup-close')

    const animationPopupOpen = () => {
        popup.style.display = 'block'
        opacity = opacity + 0.02
        posY = posY + 1

        popup.style.backgroundColor = `rgba(0,0,0,${opacity})`
        popupWindow.style.transform = `translateY(${posY}%)`
        if (opacity < 0.5) {
            requestAnimationFrame(animationPopupOpen)
        }
    }

    const animationPopupClose = () => {
        opacity = opacity - 0.02
        posY = posY - 1

        popup.style.backgroundColor = `rgba(0,0,0,${opacity})`;
        popupWindow.style.transform = `translateY(${posY}%)`
        if (opacity > 0) {
            requestAnimationFrame(animationPopupClose)
        } else {
            popup.style.display = 'none'
        }
    }


    buttons.forEach((button) => {
        button.addEventListener('click', animationPopupOpen)
    })

    btnPopupClose.addEventListener('click', animationPopupClose)
    popup.addEventListener('click', animationPopupClose)



}

export default modal