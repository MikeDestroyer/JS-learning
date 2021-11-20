'use strict';

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function GetRandomInt() {
    return Math.floor(Math.random() * 101);
}

function nubmerComparsion(num, rand) {
    if (num > rand) {
        alert('Загаданное число больше');
        return false;
    } else if (num < rand) {
        alert('Загаданное число меньше');
        return false;
    } else if (num === rand) {
        return true;
    }
}

function GuessTheNumberGame() {
    let rand = GetRandomInt();
    let userNum = 0;
    let num, restart;
    console.log(typeof (rand), rand);

    num = prompt('Супер игра! Угадай число от 0 до 100 и получить годовой запас НИХУЯ!');
    if (num == null) {
        return 'Слабак';
    }
    if (!isNumber(num)) {
        do {
            num = prompt('Ссука, введи число!');
        } while (isNumber(num) === false && num !== null);
    }
    if
        (num == null) {
        return 'Слабак';
    }
    userNum = +num;
    if (userNum === null) {
        return 'Слабак';
    }


    if (nubmerComparsion(userNum, rand)) {
        return 'Поздравляю, сегодня твой счастливый день! Собирай вещички и езжай прямиком в Вегас!';
    } else {
        restart = confirm('Хотите сыграть ещё раз?');
        if (restart == true) {
            return GuessTheNumberGame();
        } else {
            return 'Слабак';
        }
    }
}


alert(GuessTheNumberGame());




