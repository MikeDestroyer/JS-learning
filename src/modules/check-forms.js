'use strict'
const CheckForms = () => {
    const forms = document.querySelectorAll('form')
    const calcInputs = document.querySelectorAll('input.calc-item')

    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')


    const inputFormName = (input) => {
        input.target.value = input.target.value.replace(/[^а-я ]/gi, "")
    }
    const inputFormEmail = (input) => {
        input.target.value = input.target.value.replace(/[^\w^@-_.!~*']/gi, "")
    }
    const inputFormPhone = (input) => {
        input.target.value = input.target.value.replace(/[^\d\(\)-]/g, "")
    }
    const inputOnlyNumbers = (input) => {
        input.target.value = input.target.value.replace(/\D+/g, "")
    }
    const cleanCalcForm = () => {
        calcSquare.value = ''
        calcCount.value = ''
        calcDay.value = ''
    }


    forms.forEach((element) => {
        const formName = element.querySelector('input[type=text]')
        const formEmail = element.querySelector('input[type=email]')
        const formPhone = element.querySelector('input[type=tel]')
        formName.addEventListener('input', inputFormName)
        formEmail.addEventListener('input', inputFormEmail)
        formPhone.addEventListener('input', inputFormPhone)
    })
    calcInputs.forEach(element => {
        element.addEventListener('input', inputOnlyNumbers)
    })
    calcType.addEventListener('input', cleanCalcForm)
}

export default CheckForms