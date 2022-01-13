'use strict'
const modal = () => {
    const popup = document.querySelector('.popup')
    const popupWindow = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')

    let screenWidth
    let opacity = 0
    let posY = -5

    const animationPopupOpen = () => {
        screenWidth = document.documentElement.clientWidth
        if (screenWidth >= 768) {
            popup.style.display = 'block'
            opacity = opacity + 0.05
            posY = posY + 1

            popup.style.backgroundColor = `rgba(0,0,0,${opacity})`
            popupWindow.style.transform = `translateY(${posY}%)`
            if (opacity < 0.5) {
                requestAnimationFrame(animationPopupOpen)
            }
        } else {
            popup.style.backgroundColor = `rgba(0,0,0,.5)`
            popup.style.display = 'block'
        }
    }

    const animationPopupClose = () => {
        screenWidth = document.documentElement.clientWidth
        if (screenWidth >= 768) {
            opacity = opacity - 0.05
            posY = posY - 1

            popup.style.backgroundColor = `rgba(0,0,0,${opacity})`
            popupWindow.style.transform = `translateY(${posY}%)`
            if (opacity > 0) {
                requestAnimationFrame(animationPopupClose)
            } else {
                popup.style.display = 'none'
            }
        } else {
            popup.style.display = 'none'
        }
    }

    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animationPopupClose()
        }
    })

    buttons.forEach((button) => {
        button.addEventListener('click', animationPopupOpen)
    })
}

export default modal