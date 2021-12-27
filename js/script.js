'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
    let htmlElement
    if (selector.charAt(0) === '.') {
        htmlElement = document.createElement('div')
        htmlElement.classList.add(selector.substring(1))
    } else if (selector.charAt(0) === '#') {
        htmlElement = document.createElement('p')
        htmlElement.setAttribute('id', selector.substring(1));
    } else {
    }
    htmlElement.style.height = height
    htmlElement.style.width = width
    htmlElement.style.background = bg
    htmlElement.style.fontSize = fontSize
    htmlElement.textContent = text
    console.log(htmlElement);
    this.exit = htmlElement
}


// alert('Введите данные для создания элемента HTML')
// const selector = prompt('введите id "#" или class "."')
// const height = prompt('Введите параметр css "height"')
// const width = prompt('Введите параметр css "width"')
// const bg = prompt('Введите параметр css "background"')
// const fontSize = prompt('Введите параметр css "fontSize"')
// const text = prompt('Введите текст для элемента')
const selector = '.one'
const height = '20px'
const width = '40px'
const bg = 'green'
const fontSize = '16px'
const text = 'hello world'
const element = new DomElement(selector, height, width, bg, fontSize, text)

console.log(element);
document.body.appendChild(element.exit)
// element.exit.append()
console.log(document.body);