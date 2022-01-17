
    import $ from 'jquery';


    const canvas = $('#theCanvas');
    const bricks = [];
    const context = canvas[0].getContext('2d');
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
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.dx = 5;
            this.dy = 5;
        }

        drawBall() {
            this.x += this.dx;
            this.y += this.dy;


            if (this.y < this.radius || this.y > canvas.height - this.radius) {
                this.dy = -this.dy;
            }
            if (this.x < this.radius || this.x > canvas.width - this.radius) {
                this.dx = -this.dx;

            }

            breakBrick(this.x, this.y);
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fill();

        }
    }
    class Bricks {
        constructor(x, y) {
            x = this.x;
            y = this.y;
        }
    }

    $('.brick').each(function () {
        let offset = $(this).offset();
        bricks.push(new Bricks(offset.left, offset.top));
    });

    function breakBrick(BallX, BallY) {
        bricks.forEach(b => {
            if (BallX === b.x && BallY === b.y) {
                console.log('hit');
            }
        });
    }
    const balls = [];
    balls.push(new Ball(3, 'black'));
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => ball.drawBall());
    }, 100);

    setTimeout(function () {
        balls.push(new Ball(Number(3), 'blue'));
    }, 5000);
