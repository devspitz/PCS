(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor(size, color, positionX, positionY) {
            this.size = size;
            this.color = color;
            this.x = positionX || Math.random() * canvas.width;
            this.y = positionY || Math.random() * canvas.height;
            this.dx = 1;
            this.dy = 1;
        }

        drawBall() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y < this.size || this.y > canvas.height - this.size) {
                this.dy = -this.dy;
            }
            if (this.x < this.size || this.x > canvas.width - this.size) {
                this.dx = -this.dx;
            }

            context.fillStyle = this.color;
            context.beginPath();
            context.fillRect(this.x, this.y, this.size, this.size);
            context.fill();

        }
    }

    const ants = [];
    let midCavasWidth = canvas.width / 2;
    let midCavasHeight = canvas.height / 2;
    let delta = 21;
    for (let i = 0; i < 100; i++) {
        ants.push(new Ant(20, 'black', midCavasWidth += delta, midCavasHeight += delta));

    }

    midCavasWidth = canvas.width / 2;
    midCavasHeight = canvas.height / 2;

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.drawBall());
    }, 16);

    const ballColor = document.getElementById('color');
    const ballSize = document.getElementById('size');
    const antsToCreate = document.getElementById('amount').value;
    document.getElementById('addAnt').
        addEventListener('submit', e => {
            e.preventDefault();
            for (let i = 0; i < antsToCreate; i++) {
                ants.push(new Ant(Number(ballSize.value), ballColor.value));
            }
        });
}());