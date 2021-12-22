'use strict';

const appData = {
    btnStart: document.getElementById('start'),
    btnPlus: document.querySelector('.screen-btn'),
    screen: document.querySelectorAll('.screen'),
    otherItemsNumber: document.querySelectorAll('.other-items.number'),
    otherItemsPercent: document.querySelectorAll('.other-items.percent'),
    totalInputs: document.querySelectorAll('.total-input'),
    rangeRollback: document.querySelector('input[type=range]'),
    rangeValue: document.querySelector('.range-value'),


    title: '',
    screens: [],
    adaptive: true,
    isError: Boolean,
    screenPrice: 0,
    rollback: 0,
    rollbackPercent: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrices: 0,
    fullPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle();
        appData.btnStart.addEventListener('click', appData.checkInputs);
        appData.btnPlus.addEventListener('click', appData.addScreenBlock);
        appData.rangeRollback.addEventListener('input', appData.rangeInput);

    },

    addTitle: function () {
        appData.title = document.getElementById('title');
        document.title = appData.title.textContent;
    },
    rangeInput: function () {
        // console.log(appData.rangeValue.value);
        appData.rollbackPercent = +appData.rangeRollback.value;
        appData.rangeValue.textContent = appData.rangeRollback.value + '%';
    },

    checkInputs: function () {
        const screen = document.querySelectorAll('.screen');
        appData.isError = true;
        // console.dir(screen);
        screen.forEach(function (input) {
            const val = input.querySelector('div > input');
            const valIndex = input.querySelector('div > select');
            // console.log(valIndex.selectedIndex);
            // console.log(val.value);
            // console.log('val', val.value.trim() == '');
            // console.log('valIndex', valIndex.selectedIndex == 0);
            if (!(val.value.trim() !== '' && valIndex.selectedIndex !== 0)) {
                appData.isError = true;
            } else {
                appData.isError = false;
            }
        });
        if (appData.isError) {
            alert('Заполните параметры экрана');
        } else {
            appData.start();

        }


    },

    start: function () {
        // console.log('start');
        appData.addScreens();
        appData.addServices();
        appData.getPrice();
        appData.showResult();
    },

    addScreens: function () {
        appData.screen = document.querySelectorAll('.screen');
        appData.screens = [];
        appData.screen.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const name = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: name,
                number: +input.value,
                price: +select.value * +input.value
            });
        });
    },

    addScreenBlock: function () {
        const cloneScreen = appData.screen[0].cloneNode(true);
        appData.screen[appData.screen.length - 1].after(cloneScreen);
    },

    addServices: function () {
        appData.servicesPercent = [];
        appData.servicesNumber = [];
        appData.otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        // console.log(appData.servicesPercent);

        appData.otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
        // console.log(appData.servicesNumber);

    },

    getPrice: function () {
        appData.screenPrice = 0;
        appData.servicePricesNumber = 0;
        appData.servicePricesPercent = 0;
        appData.fullPrice = 0;
        appData.rollback = 0;

        for (let key in appData.screens) {
            appData.screenPrice += appData.screens[key].price;
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        appData.rollback = appData.fullPrice * (appData.rollbackPercent / 100);
    },
    showResult: function () {
        let getScreenNumber = function () {
            let result = 0;
            appData.screens.forEach(function (item) {
                result += item.number;
            });
            // console.log('screens ', appData.screens);
            // console.log('sum ', result);
            return result;
        };

        appData.totalInputs[0].value = appData.screenPrice;
        appData.totalInputs[1].value = getScreenNumber();
        appData.totalInputs[2].value = appData.servicePricesNumber + appData.servicePricesPercent;
        appData.totalInputs[3].value = appData.fullPrice;
        appData.totalInputs[4].value = appData.rollback;
    }


};

appData.init();





