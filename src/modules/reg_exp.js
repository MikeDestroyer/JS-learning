'use strict'
const regExp = () => {
    const square = document.querySelector('.calc-square')
    const count = document.querySelector('.calc-count')
    const day = document.querySelector('.calc-day')

    const inputOnlyNumbers = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")

    }




    square.addEventListener('input', inputOnlyNumbers)
    count.addEventListener('input', inputOnlyNumbers)
    day.addEventListener('input', inputOnlyNumbers)

}
export default regExp