window.pcs = window.pcs || {};
window.pcs.makeClock = function clock() {
    'use strict'
    let theClock = function () {
        const clock = document.createElement('div');
        clock.style.border = "2px solid black";
        clock.style.padding = "20px";
        document.body.appendChild(clock);


        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let secs = d.getSeconds();
        setInterval(() => {
            secs++;
            if (secs === 60) {
                secs = 0;
                minute++;
            }
            if (minute === 60) {
                minute = 0;
                hour++;
            }
            if (hour > 24) {
                hour = 1
            }
            let theTime = `${hour} : ${minute < 10 ? "0" + minute : minute} : ${secs < 10 ? "0" + secs : secs}`;
            clock.innerHTML = theTime;
        }, 1000);
    }

    return {
        create: theClock
    };
}();
