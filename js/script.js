'use strict';


const appData = {

    title: '',
    screens: [],
    adaptive: true,
    screenPrice: 0,
    rollback: 3200,
    allServicePrices: 0,
    servicePercentPrices: 0,
    fullPrice: 0,
    services: {},

    start: function () {
        appData.asking();
        appData.getTitle();
        appData.getPrice();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.logger();
    },

    asking: function () {
        appData.title = prompt('Название проекта');

        let num;
        do {
            num = prompt('Сколько будет стоить данная работа?');
            console.log(typeof (num), num);
        } while (!appData.isNumber(num));
        appData.screenPrice = +num;

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = prompt('Какой дополнительный тип услуги нужен?');

            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));
            appData.services[name + i] = +price;
        }

        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = prompt('Какие типы экранов нужно разработать');
            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));
            appData.screens.push({ id: i, name: name, price: price });
        }
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getPrice: function () {
        appData.allServicePrices = appData.screens.reduce(function (sum, appData) {
            return sum + appData.screens.price;
        }, 0);
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }

    },

    getTitle: function () {
        appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().toLowerCase().slice(1);
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrices = appData.fullPrice - appData.rollback;
    },

    getRollbackMessage: function () {
        if (appData.servicePercentPrices > 30000) {
            return 'Скидка 10%';
        } else if (appData.servicePercentPrices > 15000) {
            return 'Скидка 5%';
        } else if (appData.servicePercentPrices > 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },

    logger: function () {
        console.log('Название проекта:', appData.title);
        console.log('Типы экранов:', typeof (screens), appData.screens);
        console.log('Стоимость за вычетом процента отката посреднику: ', appData.servicePercentPrices);
        console.log('Бонус для пользователя: ', appData.getRollbackMessage());

        for (let key in appData.services) {
            console.log('Имя свойства: ' + key + " Значение: " + appData.services[key]);
        }

        console.log(appData.services);
        console.log(appData.screens);
    }
};

appData.start();












