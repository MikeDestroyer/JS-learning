'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
    let newElement
    if (selector.charAt(0) === '.') {
        console.log('true');
        newElement = document.createElement('div')
        newElement.classList.add(selector.substring(1))
    } else if (selector.charAt(0) === '#') {

        newElement = document.createElement('p')
        newElement.setAttribute('id', selector.substring(1));
    }
    newElement.style.height = height
    newElement.style.width = width
    newElement.style.background = bg
    newElement.style.fontSize = fontSize
    newElement.textContent = text
    document.body.appendChild(newElement)
}


alert('Введите данные для создания элемента HTML')
const selector = prompt('введите id "#" или class "."')
const height = prompt('Введите параметр css "height"')
const width = prompt('Введите параметр css "width"')
const bg = prompt('Введите параметр css "background"')
const fontSize = prompt('Введите параметр css "fontSize"')
const text = prompt('Введите текст для элемента')
// const selector = '.one'
// const height = '200px'
// const width = '400px'
// const bg = 'green'
// const fontSize = '16px'
// const text = 'hello world'
const creacteElement = new DomElement(selector, height, width, bg, fontSize, text)
console.log(creacteElement);

