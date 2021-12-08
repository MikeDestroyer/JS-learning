'use strict';


const appData = {

    title: '',
    screens: '',
    adaptive: true,
    screenPrice: 0,
    rollback: 3200,
    allServicePrices: 0,
    servicePercentPrices: 0,
    fullPrice: 0,
    service2: '',
    service1: '',

    asking: function () {
        appData.title = prompt('Название проекта');
        appData.screens = prompt('Какие типы экранов нужно разработать');

        let num;
        do {
            num = prompt('Сколько будет стоить данная работа?');
            console.log(typeof (num), num);
        } while (!appData.isNumber(num));
        appData.screenPrice = +num;

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function () {
        let count = 0;

        for (let i = 0; i < 2; i++) {
            let num = 0;

            if (i === 0) {
                appData.service1 = prompt('Какой первый дополнительный тип услуги нужен?');
            } else {
                appData.service2 = prompt('Какой второй дополнительный тип услуги нужен?');
            }

            do {
                num = prompt('Сколько это будет стоить?');
                console.log(num);
            } while (!appData.isNumber(num));

            count += +num;
        }
        return count;
    },

    getTitle: function () {
        return appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().toLowerCase().slice(1);
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - appData.rollback;
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

    start: function () {
        appData.asking();
        appData.title = appData.getTitle();
        appData.screens = appData.screens.split(', ');
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrices = appData.getServicePercentPrices();
        appData.logger();
    },

    logger: function () {
        console.log('Название проекта:', appData.title);
        console.log('Типы экранов:', typeof (screens), appData.screens);
        console.log('Стоимость за вычетом процента отката посреднику: ', appData.getServicePercentPrices());
        console.log('Бонус для пользователя: ', appData.getRollbackMessage());
        for (let key in appData) {
            console.log('Имя свойства: ' + key);
        }
    }
};

appData.start();












