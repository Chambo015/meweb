window.addEventListener("DOMContentLoaded", () => {

      /* Анимация кубика начало */
      const btn = document.querySelector(".btn");
      btn.addEventListener('click', () => {

            function startAnimation() {
                  let box = document.querySelector('.box');
                  let pos = 0;

                  let id = setInterval(frame, 10);
                  
                  function frame() {
                        if (pos === 300) {
                              clearInterval(id)
                        } else {
                        pos++;
                        box.style.top = pos + "px";
                        box.style.left = pos + "px";
                        }
                  }
            }
            startAnimation()
      });
      /* Анимация кубика конец */


    


      /* Таймер начало  */
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

      setClock(".timer", newYear)
      /* Таймер конец  */


      /* Спойлеры начало */
      const hard = document.querySelector('.hard-js'),
            h1links = hard.querySelectorAll('h1'),
            childs = hard.querySelectorAll('.child');
      hard.addEventListener('click', event => {
            h1links.forEach((item, i) => {
                  if (event.target == item) {
                        childs.forEach(child => {
                              if (childs[i] == child) {
                                    child.classList.toggle("hide")
                              } else {
                                    child.classList.add("hide");
                              }
                              
                        })
                        
                        
                  }
            })
            
      })
      /* Спойлеры конец */

      /* Ссылки начало */
      const code = document.querySelector(".code_newyear");
      code.addEventListener("click", () => {
            window.open(location.origin + "/js/newyear.js");
      });
      /* Ссылки конец */

      
})