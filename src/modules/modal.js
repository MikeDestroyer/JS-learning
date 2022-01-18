'use strict'
import { animate, animateReverse } from './helpers.js'

const modal = () => {
    const popup = document.querySelector('.popup')
    const popupWindow = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')

    let screenWidth

    const animationPopupOpen = () => {

        screenWidth = document.documentElement.clientWidth
        if (screenWidth >= 768) {
            popup.style.display = 'block'
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popup.style.backgroundColor = `rgba(0,0,0,${progress * 0.5})`
                    popupWindow.style.opacity = progress * 1
                    popupWindow.style.transform = `translateY(${progress * 20}%)`
                }
            })
        }
    }


    const animationPopupClose = () => {
        screenWidth = document.documentElement.clientWidth
        if (screenWidth >= 768) {
            animateReverse({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popup.style.backgroundColor = `rgba(0,0,0,${progress * 0.5})`
                    popupWindow.style.opacity = progress * 1
                    popupWindow.style.transform = `translateY(${progress * 20}%)`
                    if (popupWindow.style.opacity <= 0) {
                        popup.style.display = 'none'
                    }
                }
            })

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