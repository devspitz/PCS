(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const context = canvas.getContext('2d');
    context.fillStyle = 'blue';

    const lineStart = 20;
    let x = lineStart;
    let y = lineStart;
    let dx = 5;
    let dy = 5;

    function drawLine() {
        context.beginPath();
        context.arc(x, y, lineStart, 0, 2 * Math.PI);
        context.fill();

        x += dx; //delta- means the diffence between the current value and the new value
        y += dy;
        if (y < lineStart || y > canvas.height - lineStart) {
            dy = -dy;
        }
        if (x < lineStart || x > canvas.width - lineStart) {
            dx = -dx;
        }

        requestAnimationFrame(drawLine);
    }
  //  setInterval(drawLine, 16);
    setInterval(() => context.fillStyle = getColorChanger(), 1000);
    function getColorChanger() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    requestAnimationFrame(drawLine);



}());