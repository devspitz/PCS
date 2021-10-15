window.app = window.app || {};

window.app.module = (function (theModule) {
    'use strict';
    let countersCreated = 0;
    const counter = {
        count: 1,
        print: function () {
            console.log(`my count: ${this.count}`);
        },
        countUpOne: function () {
           return this.count++;
        }
    };

    theModule.counterCreator = function () {
        const newCounter = Object.create(counter);
        countersCreated++;
        //console.log(`counters created: ${countersCreated}`);
        return newCounter;
    };

    return theModule;
}(window.app.module || {}));
