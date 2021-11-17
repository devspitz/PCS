'use strict';

class Vehicle {
    speed = 0;

    constructor(color) {
        this.color = color;
    }

    go(speed) {
        this.speed = speed;
        console.log(`now zipping at ${speed} mph`)

    }
    print() {
        console.log(`I am ${this.color} and going ${this.speed} mph`);
    }
}

class Plane extends Vehicle {
    speed = 0;
    constructor(color) {
        super(color);
    }

    print() {
        super.print();
    }
    go(speed) {
        this.speed = speed;
        console.log(`now flying at ${this.speed} mph`)
    }
}

const p = new Vehicle('red');

p.go(99);
p.print();

const e = new Plane('white');
e.go(50000);
e.print();


