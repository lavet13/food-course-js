function timer() {
    
    const deadline = '2022-02-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function clearClock(days, hours, minutes, seconds) {
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }

    function getZero(num) {
        if (num >= 0 && num < 10) { 
            return '0' + num;
        }

        return num;
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                clearClock(days, hours, minutes, seconds);
            } else {
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);            
            }
        }
    }

    setClock('.timer', deadline);

}

module.exports = timer;