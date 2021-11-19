'use strict';

const rollback = 3200;
let title, screens, adaptive, screenPrice, allServicePrices, servicePercentPrices, fullPrice, service2, service1;

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function asking() {
    title = prompt('Название проекта');
    screens = prompt('Какие типы экранов нужно разработать');

    let num;
    do {
        num = prompt('Сколько будет стоить данная работа?');
        console.log(typeof (num), num);
    } while (!isNumber(num));
    screenPrice = +num;

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let count = 0;

    for (let i = 0; i < 2; i++) {
        let num = 0;

        if (i === 0) {
            service1 = prompt('Какой первый дополнительный тип услуги нужен?');
        } else {
            service2 = prompt('Какой второй дополнительный тип услуги нужен?');
        }

        do {
            num = prompt('Сколько это будет стоить?');
            console.log(num);
        } while (!isNumber(num));

        count += +num;
    }
    return count;
};

function getTitle() {
    return title.trim().charAt(0).toUpperCase() + title.trim().toLowerCase().slice(1);
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
    return fullPrice - rollback;
}

function getRollbackMessage() {
    if (servicePercentPrices > 30000) {
        return 'Скидка 10%';
    } else if (servicePercentPrices > 15000) {
        return 'Скидка 5%';
    } else if (servicePercentPrices > 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
}

asking();
title = getTitle();
screens = screens.split(', ');
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();


console.log('Название проекта:', title);
console.log('Типы экранов:', typeof (screens), screens);
console.log('Стоимость за вычетом процента отката посреднику: ', getServicePercentPrices());
console.log('Бонус для пользователя: ', getRollbackMessage());