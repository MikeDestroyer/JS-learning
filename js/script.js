'use strict';

const rollback = 3200;

let title = prompt('Название проекта');
let screens = prompt('Какие типы экранов нужно разработать');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой первый дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой второй дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - rollback;


if (servicePercentPrice > 30000) {
    console.log('Скидка 10%');
    console.log(servicePercentPrice / 100 * 10);
} else if (servicePercentPrice > 15000) {
    console.log('Скидка 5%');
    console.log(servicePercentPrice / 100 * 5);
} else if (servicePercentPrice > 0) {
    console.log('Скидка не предусмотрена');
    console.log(servicePercentPrice);
} else {
    // } else if (servicePercentPrice == 0){
    console.log('Что то пошло не так');
}

console.log('Название проекта -', title);
console.log('типы экранов:', screens);
console.log('стоит данная работа', screenPrice);
console.log('Нужен ли адаптив на сайте?', adaptive);
console.log('Какой первый дополнительный тип услуги нужен?', service1);
console.log('Сколько это будет стоить?', servicePrice1);
console.log('Какой первый дополнительный тип услуги нужен?', service2);
console.log('Сколько это будет стоить?', servicePrice2);
console.log('Суммарная стоимость услуг:', fullPrice, 'рублей');
console.log('Стоимость услуг с учётом отката:', servicePercentPrice, 'рублей');