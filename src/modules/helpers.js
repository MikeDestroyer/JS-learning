'use strict'

function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration

        timeFraction = Math.pow(timeFraction, 2)

        if (timeFraction > 1) { timeFraction = 1 }

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction)

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

function animateReverse({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = ((start - time) / duration) + 1

        timeFraction = Math.pow(timeFraction, 2)

        if (timeFraction <= 0.1) { timeFraction = 0 }

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction)

        draw(progress); // отрисовать её
        if (timeFraction > 0) {
            requestAnimationFrame(animate);
        }

    });
}


export { animate, animateReverse }