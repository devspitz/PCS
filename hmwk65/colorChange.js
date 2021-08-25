(function () {
    'use strict';
    const mainPicBack = document.getElementById('mainPicBack');
    let i = 0;
    const getColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    function randomNumber() {
      let  min = Math.ceil(0);
      let  max = Math.floor(255);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function changer() {
        mainPicBack.style.backgroundColor = getColor();
    }
    let interval;
    const resume = document.getElementById('resume');
    resume.addEventListener('click', () => {
        interval = setInterval(changer, 1000);
    });
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearInterval(interval);
    });
}());