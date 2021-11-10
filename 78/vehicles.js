(function () {
    function Vehicles(color, goSpeed) {
        this.color = color;
        this.goSpeed = goSpeed;
    }
    Vehicles.prototype.printSpeed = function () {
        console.log(`now going at speed ${this.goSpeed}`);
    }
    Vehicles.prototype.print = function () {
        console.log(`the color of the vehicle is ${this.color}
        and its going ${this.goSpeed} mph!`)
    }

    const car = new Vehicles('red', '5');
    car.print();
    car.printSpeed();

    function Plane(color, goSpeed) {
        Vehicles.call(this, color, goSpeed);
    }
    Plane.prototype = Object.create(Vehicles.prototype);
    Plane.prototype.constructor = Plane;
    Plane.prototype.printSpeed = function () {
        console.log(`now flying at speed ${this.goSpeed}`);
    };

    const airplane = new Plane('green', '565');
    airplane.print();
    airplane.printSpeed();

    //cuz no constucter=no waste just functions
}());