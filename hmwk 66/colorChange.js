(function () {
    'use strict';
    const mainPicBack = get('mainPicBack');
    let i = 0;

    const getColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    function randomNumber() {
        let min = Math.ceil(0);
        let max = Math.floor(255);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function changer() {
        let currentColor = getColor();
        mainPicBack.style.backgroundColor = currentColor;
        insertRow(currentColor);
    }
    let interval;
    const resume = document.getElementById('resume');
    resume.addEventListener('click', () => {
        interval = setInterval(changer, 3000);
    });

    const stop = document.getElementById('stop');

    stop.addEventListener('click', () => {
        clearInterval(interval);
    });


    const insertRow = function (currentColor) {
        let row = theTable.insertRow();
        let theColor = row.insertCell();
        let theTime = row.insertCell();
        theColor.innerText = currentColor;
        theTime.innerText = getTime();
        row.addEventListener('click', () => { 
            mainPicBack.style.backgroundColor = currentColor;
            clearInterval(interval);
        });

    };

    function get(id) {
        return document.getElementById(id);
    }
    function getTime() {
        const now = new Date();
        return now.toLocaleString();
    }



}());