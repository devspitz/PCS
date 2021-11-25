(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    const snakeSize = 100;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const outSound = document.getElementById('audio');
    const crunch = document.getElementById('crunch');

    let gameOver = false;
    let speed = 500;
    let score = 0;

    class Snake {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.body = [];

            this.direction = 'ArrowRight';

            document.addEventListener('keydown', event => {
                switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = event.key;
                }
            });
            this.draw();
        }

        draw() {
            context.drawImage(snakeHead, this.x, this.y, snakeSize, snakeSize);
            console.log(this.body);
            this.body.forEach(bodyPart => {
                //  context.beginPath();

                context.fillStyle = 'green';
                context.fillRect(bodyPart.x + 10, bodyPart.y + 10, snakeSize - 30, snakeSize - 30);

            });
        }

        move() {
            let x = this.x;
            let y = this.y;

            switch (this.direction) {
                case 'ArrowRight':
                    x += snakeSize;
                    break;
                case 'ArrowLeft':
                    x -= snakeSize;
                    break;
                case 'ArrowUp':
                    y -= snakeSize;
                    break;
                case 'ArrowDown':
                    y += snakeSize;
                    break;

            }

            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                gameOver = true;

            } else {


                //  this.body.forEach(bodyPart => {
                if (this.body.length) {

                    this.body.pop();
                    this.body.unshift({ x: this.x, y: this.y });

                }
                //move body loop thru aray, pop off last one, unshift new one to front
                this.x = x;
                this.y = y;
            }

            if (this.x === apple.x && this.y === apple.y) {
                speed = speed * 0.9;
                score++;
                crunch.currentTime = 0;
                crunch.play();
                apple.move();

                this.body.push({}); // this should really be drawn in last position of body array
            }

            this.draw();
        }
        growSnake() {

        }
    }



    class Apple {
        constructor() {
            this.move();

        }
        draw() {
            context.drawImage(applePic, this.x, this.y, snakeSize, snakeSize);
        }
        move() {
            this.x = this.getRandomPosition(0, canvas.width - 1);
            this.y = this.getRandomPosition(0, canvas.height - 1);
            this.draw();
        }

        getRandomPosition(min, max) {
            let r = Math.floor(Math.random() * (max - min + 1)) + min;
            r = r - r % snakeSize;
            return r;
        }

    }

    let snake;
    let apple;

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = 'Bold 20pt Arial';
        context.fillText(`Score: ${score}`, canvas.width - 160, 40);

        snake.move();
        apple.draw();

        if (!gameOver) {
            setTimeout(gameLoop, speed);
        } else {
            context.font = 'Bold 20pt Arial';
            context.fillText(`Game Over`, canvas.width / 2 - 80, canvas.height / 2);
            outSound.currentTime = 0;
            outSound.play();
        }
    }

    const snakeHead = new Image();
    snakeHead.src = 'snakeHead.png';
    snakeHead.onload = () => {
        snake = new Snake();
        setTimeout(gameLoop, speed);
    };

    const applePic = new Image();
    applePic.src = 'apple.png';
    applePic.onload = () => {
        apple = new Apple();
    };

}());