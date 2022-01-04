'use strict'

const menu = () => {
    const btnMenu = document.querySelector('.menu')
    const btnClose = document.querySelector('.close-btn')
    const menu = document.querySelector('menu')
    const menuItems = document.querySelectorAll('ul > li > a')

    const popupMenu = () => {
        menu.classList.toggle('active-menu')
    }


    btnMenu.addEventListener('click', popupMenu)
    btnClose.addEventListener('click', popupMenu)

    menuItems.forEach((item) => { item.addEventListener('click', popupMenu) })
}
export default menu