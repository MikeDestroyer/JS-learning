'use strict'

const menu = () => {
    const btnMenu = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const popupMenu = () => {
        menu.classList.toggle('active-menu')
    }

    btnMenu.addEventListener('click', popupMenu)
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            popupMenu()
        }
    })

}
export default menu