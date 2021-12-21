'use strict';

const appData = {
    btnStart: document.getElementById('start'),
    btnPlus: document.querySelector('.screen-btn'),
    screen: document.querySelectorAll('.screen'),
    otherItemsNumber: document.querySelectorAll('.other-items.number'),
    otherItemsPercent: document.querySelectorAll('.other-items.percent'),
    totalInputs: document.querySelectorAll('.total-input'),


    title: '',
    screens: [],
    adaptive: true,
    screenPrice: 0,
    rollback: 3200,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrices: 0,
    fullPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle();
        appData.btnStart.addEventListener('click', appData.start);
        appData.btnPlus.addEventListener('click', appData.addScreenBlock);
    },

    addTitle: function () {
        appData.title = document.getElementById('title');
        document.title = appData.title.textContent;
    },

    start: function () {
        console.log('start');
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
        console.log(appData.servicesPercent);

        appData.otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
        console.log(appData.servicesNumber);

    },

    getPrice: function () {
        appData.screenPrice = 0;
        appData.servicePricesNumber = 0;
        appData.servicePricesPercent = 0;
        appData.fullPrice = 0;

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
    },
    showResult: function () {
        let getScreenNumber = function () {
            let result = 0;
            appData.screens.forEach(function (item) {
                result += item.number;
            });
            console.log('screens ', appData.screens);
            console.log('sum ', result);
            return result;
        };
        appData.totalInputs[0].value = appData.screenPrice;
        appData.totalInputs[1].value = getScreenNumber();
        console.log(appData.totalInputs[1].value);
        appData.totalInputs[2].value = appData.servicePricesNumber + appData.servicePricesPercent;
        appData.totalInputs[3].value = appData.fullPrice;
        console.log(appData.screens[0].number);
    }


};

appData.init();












