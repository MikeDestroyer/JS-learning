'use strict'

const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const btnPrev = document.querySelector('.prev')
    const btnNext = document.querySelector('.next')
    const dots = document.querySelectorAll('.dot')

    let currentSlide = 0



    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = () => {
        setInterval(autoSlide, 2000)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.matches('#arrow-left')) {
            console.log('left');
        } else if (e.target.matches('#arrow-right')) {
            console.log('right');
        } else if ((e.target.classList.contains('dot'))) {
            console.log('dot');
        }
    })

    // const stopSlide = () => {

    // }
    startSlide()
}
export default slider