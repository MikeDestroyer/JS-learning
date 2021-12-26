'use strict'

const appData = {
    btnStart: document.getElementById('start'),
    btnReset: document.getElementById('reset'),
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
    clearScreen: document.querySelectorAll('.screen'),

    init: function () {
        this.addTitle()
        this.btnStart.addEventListener('click', this.checkInputs.bind(this))
        this.btnPlus.addEventListener('click', this.addScreenBlock.bind(this))
        this.rangeRollback.addEventListener('input', this.rangeInput.bind(this))

    },

    addTitle: function () {
        this.title = document.getElementById('title')
        document.title = this.title.textContent
    },
    rangeInput: function () {
        // console.log(appData.rangeValue.value)
        console.log(this)
        this.rollbackPercent = +this.rangeRollback.value
        this.rangeValue.textContent = this.rangeRollback.value + '%'
    },

    checkInputs: function () {
        const screen = document.querySelectorAll('.screen')
        this.isError = true
        screen.forEach((input) => {
            const val = input.querySelector('div > input')
            const valIndex = input.querySelector('div > select')
            if (!(val.value.trim() !== '' && valIndex.selectedIndex !== 0)) {
                this.isError = true
            } else {
                this.isError = false
            }
        })
        if (this.isError) {
            alert('Заполните параметры экрана')
        } else {
            this.start()

        }


    },

    start: function () {
        // console.log('start')
        this.addScreens()
        this.addServices()
        this.getPrice()
        this.showResult()
        this.showBtnReset()
    },

    addScreens: function () {
        this.screen = document.querySelectorAll('.screen')
        this.screens = []
        this.screen.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const name = select.options[select.selectedIndex].textContent

            this.screens.push({
                id: index,
                name: name,
                number: +input.value,
                price: +select.value * +input.value
            })
        })
    },

    addScreenBlock: function () {
        const cloneScreen = this.screen[0].cloneNode(true)
        this.screen[this.screen.length - 1].after(cloneScreen)
    },

    addServices: function () {
        this.servicesPercent = []
        this.servicesNumber = []
        this.otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })

        this.otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })

    },

    getPrice: function () {
        this.screenPrice = 0
        this.servicePricesNumber = 0
        this.servicePricesPercent = 0
        this.fullPrice = 0
        this.rollback = 0

        for (let key in this.screens) {
            this.screenPrice += this.screens[key].price
        }
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
        this.rollback = this.fullPrice * (this.rollbackPercent / 100)
    },
    showResult: function () {
        let getScreenNumber = () => {
            let result = 0
            this.screens.forEach((item) => {
                result += item.number
            })
            // console.log('screens ', appData.screens)
            // console.log('sum ', result)
            return result
        }

        this.totalInputs[0].value = this.screenPrice
        this.totalInputs[1].value = getScreenNumber()
        this.totalInputs[2].value = this.servicePricesNumber + this.servicePricesPercent
        this.totalInputs[3].value = this.fullPrice
        this.totalInputs[4].value = this.rollback
    },

    showBtnReset: function () {
        this.btnStart.style.display = 'none'
        this.btnReset.style.display = 'block'
        this.btnReset.addEventListener('click', this.reset.bind(this))
    },

    reset: function () {
        this.clearScreenBlock()
    },

    clearScreenBlock: function () {
        // appData.screen[0].childNodes[1].childNodes[1].options = 1
        // let firstScreenOption = document.querySelector('select[name=views-select]')
        // let firstScreenValue = document.querySelector('input[type=text]')
        // firstScreenOption.selectedIndex = 0
        // firstScreenValue.value = ''
        // this.screen.forEach((key, index) => {
        //     if (index !== 0) {
        //         delete this.screen[index]
        //         // console.log(this.screen[index]);
        //     }
        // })
        // this.screen = this.clearScreen
        // console.log(this.screen)
        console.log(appData.screen);
        console.log(appData.clearScreen);

    }
}

appData.init()

