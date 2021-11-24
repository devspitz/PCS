//if take out cleatContext, you'll get 'lines' like a screenSaver
(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    let oldTimestamp;
    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ball {
        constructor(radius, color) {
            this.radius = radius;
            this.color = color;
            this.x = this.radius;
            this.y = this.radius;
            this.dx = 10;
            this.dy = 10;
        }

        drawBall(timestamp) {
            //     const timeDelta = timestamp - oldTimestamp;
            //    console.log(timestamp, timeDelta);
            //     oldTimestamp = timestamp;
            //   console.log(timestamp); || perforamance.now() in the window
            this.x += this.dx;// * (timeDelta * 0.01); //delta- means the diffence between the current value and the new value
            this.y += this.dy; // * (timeDelta * 0.01);


            if (this.y < this.radius || this.y > canvas.height - this.radius) {
                this.dy = -this.dy;
            }
            if (this.x < this.radius || this.x > canvas.width - this.radius) {
                this.dx = -this.dx;
            }

            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fill();
            //  requestAnimationFrame(drawBall);
        }

        //  setInterval(drawBall, 16);
        //   requestAnimationFrame(drawBall);
    }

    const balls = [];
    balls.push(new Ball(20, 'red'));

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => ball.drawBall());
    }, 16);

    const ballColor = document.getElementById('color');
    const ballSize = document.getElementById('size');

    document.getElementById('addBall').
        addEventListener('submit', e => {
            e.preventDefault();
            balls.push(new Ball(Number(ballSize.value), ballColor.value));
        });
}());