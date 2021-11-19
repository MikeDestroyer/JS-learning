'use strict';

const rollback = 3200;
let title, screens, adaptive, screenPrice, allServicePrices, servicePercentPrices, fullPrice, service2, service1;

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function asking() {
    title = prompt('Название проекта');
    // screens = prompt('Название проекта');
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));
    // adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            do {
                service1 = prompt('Какой первый дополнительный тип услуги нужен?');

            } while (!isNumber(service1));
        } else {
            do {
                service2 = prompt('Какой второй дополнительный тип услуги нужен?');

            } while (!isNumber(service2));
        }

        sum += +prompt('Сколько это будет стоить?');
    }
    return sum;
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
