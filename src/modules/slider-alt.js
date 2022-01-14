// 'use strict'

// const slider = () => {
//     const sliderBlock = document.querySelectorAll('.portfolio-content')
//     const slides = document.querySelectorAll('.portfolio-item')
//     const btnPrev = document.querySelector('.prev')
//     const btnNext = document.querySelector('.next')
//     const dots = document.querySelectorAll('.dot')


//     let currentSlide = 0
//     let currentdot = 0



//     const prevSlide = (elems, index, strClass) => {
//         elems[index].classList.remove(strClass)
//         index--

//         if (index < 0) {
//             index = elems.length - 1
//         }
//         elems[index].classList.add(strClass)
//     }

//     const nextSlide = (elems, index, strClass) => {
//         elems[index].classList.remove(strClass)
//         index++
//         if (index >= slides.length) {
//             index = 0
//         }
//         elems[index].classList.add(strClass)
//         return index
//     }
//     const autoSlide = () => {
//         currentSlide = nextSlide(slides, currentSlide, 'portfolio-item-active')
//         currentdot = nextSlide(dots, currentdot, 'dot-active')
//     }

//     const startSlide = () => {
//         setInterval(autoSlide, 2000)
//     }

//     const stopSlide = () => {

//     }
//     startSlide()
//     btnPrev.addEventListener('click', prevSlide)
//     btnNext.addEventListener('click', nextSlide)
// }

// export default slider