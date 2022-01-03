'use strict'
const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')


    const getTimeLeft = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeLeft = (dateStop - dateNow) / 1000
        let hours = ('0' + Math.floor(timeLeft / 1200)).slice(-2)
        let minutes = ('0' + Math.floor((timeLeft / 60) % 60)).slice(-2)
        let seconds = ('0' + Math.floor(timeLeft % 60)).slice(-2)
        return {
            timeLeft, hours, minutes, seconds
        }
    }

    const clockUpdate = () => {
        let getTime = getTimeLeft()

        if (getTime.timeLeft > 0) {
            timerHours.textContent = getTime.hours
            timerMinutes.textContent = getTime.minutes
            timerSeconds.textContent = getTime.seconds
        } else {
            clearInterval(timeCounter)
        }
    }

    clockUpdate()
    const timeCounter = setInterval(clockUpdate, 1000, deadline)

}

export default timer