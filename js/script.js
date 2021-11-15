'use strict';

const rollback = 3200;

let title = prompt('Название проекта');
// let screens = prompt('Какие типы экранов нужно разработать');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
// let adaptive = confirm('Нужен ли адаптив на сайте?');
// let service1 = prompt('Какой первый дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
// let service2 = prompt('Какой второй дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let allServicePrices, servicePercentPrice, fullPrice;

const getAllServicePrices = function () {

    return servicePrice1 + servicePrice2;
};
function getFullPrice() {
    return screenPrice + allServicePrices;
}
function getTitle() {
    return title.trim().charAt(0).toUpperCase() + title.trim().toLowerCase().slice(1);
}
let getServicePercentPrices = function () {
    return fullPrice - rollback;
};
function getRollbackMessage() {
    if (servicePercentPrice > 30000) {
        return 'Скидка 10%';
    } else if (servicePercentPrice > 15000) {
        return 'Скидка 5%';
    } else if (servicePercentPrice > 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
}
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log('Название проекта -', title);
// console.log('типы экранов:', screens);
// console.log('стоит данная работа', screenPrice);
// console.log('Нужен ли адаптив на сайте?', adaptive);
// console.log('Какой первый дополнительный тип услуги нужен?', service1);
// console.log('Сколько это будет стоить?', servicePrice1);
// console.log('Какой первый дополнительный тип услуги нужен?', service2);
// console.log('Сколько это будет стоить?', servicePrice2);
// console.log('Суммарная стоимость услуг:', fullPrice, 'рублей');
// console.log('Стоимость услуг с учётом отката:', servicePercentPrice, 'рублей');