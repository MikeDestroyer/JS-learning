'use strict';

const rollback = 3200;

let title = prompt('Название проекта');
console.log('Название проекта -', title);
let screens = prompt('Какие типы экранов нужно разработать');
console.log('типы экранов:', screens);
let screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log('стоит данная работа', screenPrice);
let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log('Нужен ли адаптив на сайте?', adaptive);

let service1 = prompt('Какой первый дополнительный тип услуги нужен?');
console.log('Какой первый дополнительный тип услуги нужен?', service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log('Сколько это будет стоить?', servicePrice1);
let service2 = prompt('Какой второй дополнительный тип услуги нужен?');
console.log('Какой первый дополнительный тип услуги нужен?', service2);
let servicePrice2 = +prompt('Сколько это будет стоить?');
console.log('Сколько это будет стоить?', servicePrice2);


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Суммарная стоимость услуг:', fullPrice, 'рублей');
let servicePercentPrice = fullPrice - rollback;
console.log('Стоимость услуг с учётом отката:', servicePercentPrice, 'рублей');

switch (true) {
    case servicePercentPrice > 30000:
        console.log('Скидка 10%');
        console.log(servicePercentPrice / 100 * 10);
        break;
    case 30000 > servicePercentPrice && servicePercentPrice > 15000:
        console.log('Скидка 5%');
        console.log(servicePercentPrice / 100 * 5);
        break;
    case 15000 > servicePercentPrice && servicePercentPrice > 0:
        console.log('Скидка не предусмотрена');
        console.log(servicePercentPrice);
        break;
    case 0 > servicePercentPrice:
        console.log('Что то пошло не так');
}
