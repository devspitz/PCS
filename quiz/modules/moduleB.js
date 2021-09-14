window.app = window.app || {};

window.app.module = (function (theModule) {
    'use strict';
    let countersCreated = 0;
    const counter = {
        count: 1, // SL - this is not as private as it could be.Can still be changed from outside by doing myCounter.count = .. better would be a function that returns closures that operate on a count var defined in func
        print: function () {
            console.log(`my count: ${this.count}`); // SL - again, not really our business to be logging count here
        },
        countUpOne: function () {
           return this.count++;
        }
        // SL - why does counter 1 have increment and getAmount, but this one has print and countUpOne?
    };

    // SL - so we have a factory function that creates objects for you - and assigns the object with print and countUpOne as the prototype. Nice. But we didnt learn about prototypes yet... Do you understand how this works? (I would imagine not...)
    // Why not just a function that returns an object as was suggested in quiz doc? (as we did for persons)?
    theModule.counterCreator = function () {
        const newCounter = Object.create(counter);
        countersCreated++;
        //console.log(`counters created: ${countersCreated}`);
        return newCounter;
    };

    return theModule;
}(window.app.module || {}));

// SL - grade - 90
