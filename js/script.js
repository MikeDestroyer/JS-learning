'use strict';

const title = getElementByTagFromArray('h1', 0);
const reset = getElementByClassFromArray('handler_btn', 0);
const start = getElementByClassFromArray('handler_btn', 1);
const addScreen = document.querySelector('.screen-btn');
const otherItems1 = document.querySelectorAll('.other-items', '.number');
const otherItems2 = document.querySelectorAll('.other-items', '.percent');
const rollback = document.querySelector('.rollback > div > input');
const span = document.querySelector('.rollback > div > .range-value');


function getElementByTagFromArray(tagName, index) {
    let tag = document.getElementsByTagName(tagName);
    return tag[index];
}

function getElementByClassFromArray(className, index) {
    let tag = document.getElementsByClassName(className);
    return tag[index];
}

function getVarsFromClass(ClassName, varName) {
    let lenght = document.getElementsByClassName(ClassName).length;
    // console.log(lenght);
    for (let i = 0; i < lenght; i++) {
        let(varName + i) = ;
    }

}
getVarsFromClass('total-input');
console.log(rollback);
console.log(span);
// // rollback = rollback.getAttribute()
// console.log(title);
// console.log(start);
// console.log(reset);
// console.log(addScreen);
// console.log(otherItems1);
// console.log(otherItems2);
// console.log(rollback);