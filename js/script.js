'use strict';

const btnAdd = document.getElementById('add')
const headerInput = document.querySelector('.header-input')
const toDoControl = document.querySelector('.todo-control')
const toDoList = document.querySelector('.todo-list')
const toDoCompeted = document.querySelector('.todo-completed')
const isError = true

let toDoData = JSON.parse(localStorage.getItem('toDoData') || '[]')


toDoControl.addEventListener('submit', function (event) {
    event.preventDefault()
    const newToDo = {
        text: headerInput.value,
        completed: false
    }

    if (newToDo.text.trim() == '') {
        alert('Введите данные')
    } else {
        toDoData.push(newToDo)
        headerInput.value = ''
        render()
    }

})

const render = function () {
    localStorage.removeItem(toDoData)
    toDoList.innerHTML = ''
    toDoCompeted.innerHTML = ''
    toDoData.forEach(function (item, index) {
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML =
            '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            toDoCompeted.append(li)
        } else {
            toDoList.append(li)
        }
        li.querySelector('.todo-remove').addEventListener('click', function () {
            li.remove()
            toDoData.splice(index, 1)
            render()
        })
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })
    })

    localStorage.setItem('toDoData', JSON.stringify(toDoData))
}

render()