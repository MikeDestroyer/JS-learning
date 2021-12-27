'use strict'

const DomElement = function (selector, height, width, bg, fontSize, text) {
    let newElement
    console.log(selector);
    this.element = () => {
        console.log('start');
        if (selector.charAt(0) === '.') {
            console.log('true');
            newElement = document.createElement('div')
            newElement.classList.add(selector.substring(1))
        } else if (selector.charAt(0) === '#') {
            console.log('false');
            newElement = document.createElement('p')
            newElement.setAttribute('id', selector.substring(1));
        } else {
            console.log('bullshit');
        }
    }
    console.log(newElement);
    console.dir(newElement);
    newElement.style.height = height
    newElement.style.width = width
    newElement.style.background = bg
    newElement.style.fontSize = fontSize
    newElement.textContent = text
    newElement.appendChild(document.body)
}

function asking() {
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
    window.newElement = new DomElement(selector, height, width, bg, fontSize, text)
}

asking()