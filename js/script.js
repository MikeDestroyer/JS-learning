'use strict';

const btnAdd = document.getElementById('add')
const headerInput = document.querySelector('.header-input')
const toDoControl = document.querySelector('.todo-control')
const toDoList = document.querySelector('.todo-list')
const toDoCompeted = document.querySelector('.todo-completed')
const isError = true

const toDoData = [
    {
        text: 'some text',
        completed: false
    },
    {
        text: 'some more text',
        completed: false
    },
    {
        text: 'some even more text',
        completed: false
    },
]


toDoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    const newToDo = {
        text: headerInput.value,
        completed: false
    }

    if (newToDo.trim() == '') {
        // alert('Введите данные')
        console.log('true');
    } else {
        console.log('else');
        // toDoData.push(newToDo)
    }

    // render()
})

// const render = function () {
//     if
// }
