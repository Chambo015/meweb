let newYear = new Date().getFullYear() + 1;

function getTimeRemaining(endTime) {
      const t = Date.parse(`01 Jan ${endTime} 00:00:00`) - Date.now();

      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((t / (1000 * 60)) % 60);
      let seconds = Math.floor((t / 1000) % 60);

      return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
      }
}

function setClock(selector, endTime) {
      const timer = document.querySelector(selector);
      days = timer.querySelector("#days");
      hours = timer.querySelector("#hours");
      minutes = timer.querySelector("#minutes");
      seconds = timer.querySelector("#seconds");

      const timeInterval = setInterval(updateClock, 1000)
      updateClock()

      function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if (t.total <= 0) {
                  clearInterval(updateClock);
            }
      }

}

function setZero(num) {
      if (num < 10) {
            return `0${num}`;
      } else {
            return num
      }
}

setClock(".timer", newYear);