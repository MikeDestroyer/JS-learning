'use strict';

const rollback = 3200;

let title = prompt('Название проекта');
let screens = prompt('Какие типы экранов нужно разработать');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
// let adaptive = confirm('Нужен ли адаптив на сайте?');
// let service1 = prompt('Какой первый дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
// let service2 = prompt('Какой второй дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let allServicePrices, servicePercentPrices, fullPrice;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
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

title = getTitle();
screens = screens.split(', ');
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();

console.log('Название проекта:', title);
console.log('Типы экранов:', typeof (screens), screens);
console.log('Стоимость за вычетом процента отката посреднику: ', getServicePercentPrices());
console.log('Бонус для пользователя: ', getRollbackMessage());