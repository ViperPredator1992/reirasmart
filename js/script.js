const countTimer = (deadline) => {

    const timerHours = document.querySelector('#timer-days'),
        timerMinutes = document.querySelector('#timer-hours'),
        timerSeconds = document.querySelector('#timer-minutes');

    const getTimeRemaining = () => {

        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };

    };

    const upDateClock = () => {

        const timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        if (timer.hours < 10) {
            timerHours.textContent = '0' + timer.hours;
        }

        timerMinutes.textContent = timer.minutes;
        if (timer.minutes < 10) {
            timerMinutes.textContent = '0' + timer.minutes;
        }

        timerSeconds.textContent = timer.seconds;
        if (timer.seconds < 10) {
            timerSeconds.textContent = '0' + timer.seconds;
        }


        if (timer.timeRemaining <= 0) {
            clearInterval(upDateClockInterval);
        }

        if (timer.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    };

    let upDateClockInterval = setInterval(upDateClock, 1000);

    upDateClock();

};
countTimer('1 octomber 2019');