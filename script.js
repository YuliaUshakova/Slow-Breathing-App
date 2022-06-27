const button = document.querySelector('#btn');

const timer = 2;
let amountTime = timer * 60;

button.addEventListener('click', function() {
    countdown.style.display="block";
    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
    calculateTime();

    function calculateTime() {
        button.setAttribute("disabled", true);  //switches off the Play button so there is no glitching on extra clicks//
        const countdown = document.querySelector('#countdown');
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdown.textContent=`${minutes} : ${seconds}`;
        amountTime--;
        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }
    function stopTimer() {
        clearInterval(timerId);
    }
    }
    let timerId = setInterval(calculateTime, 1000);
   })