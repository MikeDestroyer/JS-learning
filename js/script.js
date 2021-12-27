'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    let newElement
    this.selector = () => {
        if (selector.charAt(0) === '.') {
            newElement = document.createElement('div')
            newElement.classList.add(selector.substring(1))
        } else if (selector.charAt(0) === '#') {
            newElement = document.createElement('p')
            newElement.setAttribute('id', selector.substring(1));
        }
    }
    newElement.style.height = height
    newElement.style.width = width
    newElement.style.background = bg
    newElement.style.fontSize = fontSize
    newElement.appendChild(document.body)
}

function asking() {
    alert('Введите данные для создания элемента HTML')
    asking()
}