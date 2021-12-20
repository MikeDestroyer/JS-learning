'use strict';

const btn = document.getElementById('btn');
const span = document.getElementById('span');
const text = document.getElementById('text');
const range = document.getElementById('range');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

let textValue, rangeValue;


text.addEventListener('change', function () {
    textValue = text.value;
    console.log(textValue);
});

btn.addEventListener('click', function () {
    square.style.backgroundColor = textValue;
});

range.addEventListener('input', function () {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
    span.value = range.value;
    console.log(circle.style.width);
});


// console.log(btn);
// console.dir(btn);