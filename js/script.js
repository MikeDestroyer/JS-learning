const title = 'Калькулятор';
let screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 82;
const rollback = 32;
const fullPrice = 300;
let adaptive = true;

console.log('Тип переменной title -', typeof title);
console.log('Тип переменной fullPrice -', typeof fullPrice);
console.log('Тип переменной adaptive -', typeof adaptive);
console.log('Длина строки переменной title -', title.length, 'символов');
console.log('Стоимость верстки экранов', screenPrice, 'Доллара');
console.log('Стоимость разработки сайта', fullPrice, 'Bucks');
screens = screens.toLowerCase();
console.log(screens.split(', '));
console.log('Процент отката посреднику за работу ', fullPrice * (rollback / 100));
