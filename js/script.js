'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.text = text
}

DomElement.prototype.displayElement = function () {
    if (selector.charAt(0) === '.') {
        this.element = document.createElement('div')
        this.element.classList.add(selector.substring(1))
    } else if (selector.charAt(0) === '#') {
        this.element = document.createElement('p')
        this.element.setAttribute('id', selector.substring(1));
    }
    this.element.style.height = this.height
    this.element.style.width = this.width
    this.element.style.background = this.bg
    this.element.style.fontSize = this.fontSize
    this.element.textContent = this.text
    document.body.appendChild(this.element)
}
>>>>>>> 02cf8f9c60c739f4a7daef8d1c924d6b788eca6b

// alert('Введите данные для создания элемента HTML')
// const selector = prompt('введите id "#" или class "."')
// const height = prompt('Введите параметр css "height"')
// const width = prompt('Введите параметр css "width"')
// const bg = prompt('Введите параметр css "background"')
// const fontSize = prompt('Введите параметр css "fontSize"')
// const text = prompt('Введите текст для элемента')
const selector = '.one'

const height = '200px'
const width = '400px'
const bg = 'green'
const fontSize = '16px'
const text = 'hello world'
const creacteElement = new DomElement(selector, height, width, bg, fontSize, text)
console.log(creacteElement);

creacteElement.displayElement()
>>>>>>> 02cf8f9c60c739f4a7daef8d1c924d6b788eca6b
