'use strict'
const CheckForms = () => {
    const formTopName = document.getElementById('form1-name')
    const formTopEmail = document.getElementById('form1-email')
    const formTopPhone = document.getElementById('form1-phone')

    const formBottomName = document.getElementById('form2-name')
    const formBottomEmail = document.getElementById('form2-email')
    const formBottomPhone = document.getElementById('form2-phone')

    const formModalName = document.getElementById('form2-name')
    const formModalEmail = document.getElementById('form2-email')
    const formModalPhone = document.getElementById('form2-phone')

    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')


    const inputOnlyNumbers = (input) => {
        input.target.value = input.target.value.replace(/\D+/g, "")
    }
    const inputFormName = (input) => {
        input.target.value = input.target.value.replace(/[^а-я ]/gi, "")
    }
    const inputFormEmail = (input) => {
        input.target.value = input.target.value.replace(/[^\w^@-_.!~*']/gi, "")
    }
    const inputFormPhone = (input) => {
        input.target.value = input.target.value.replace(/[^\d\(\)-]/g, "")
    }
    const cleanCalcForm = () => {
        calcSquare.value = ''
        calcCount.value = ''
        calcDay.value = ''
    }

    formTopName.addEventListener('input', inputFormName)
    formTopEmail.addEventListener('input', inputFormEmail)
    formTopPhone.addEventListener('input', inputFormPhone)

    formBottomName.addEventListener('input', inputFormName)
    formBottomEmail.addEventListener('input', inputFormEmail)
    formBottomPhone.addEventListener('input', inputFormPhone)

    formModalName.addEventListener('input', inputFormName)
    formModalEmail.addEventListener('input', inputFormEmail)
    formModalPhone.addEventListener('input', inputFormPhone)

    calcSquare.addEventListener('input', inputOnlyNumbers)
    calcCount.addEventListener('input', inputOnlyNumbers)
    calcDay.addEventListener('input', inputOnlyNumbers)
    calcType.addEventListener('input', cleanCalcForm)

}
export default CheckForms