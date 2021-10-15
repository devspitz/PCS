flash: function (duration, speed) {
    let theInterval = setInterval(() => {
        const getColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        function randomNumber() {
            let min = Math.ceil(0);
            let max = Math.floor(255);
            return Math.floor(Math.random() * (max - min + 1) + min);
            this.style.backgroundColor = getColor;
        }

    }, speed === 1 ? 1000 : 2000);
    setTimeout(() => {
        clearInterval(theInterval);
    }, duration);
    return this;
}