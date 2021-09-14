window.app = window.app || {};

// SL - window.app.module is not very descriptive. counter would have been a better name...
window.app.module = (function (theModule) {
    'use strict';
    let theCounter = 0;

    theModule.increment = function () {
        return theCounter++;
    };
    theModule.getAmount = function () {
        // SL - message is going to be undefined, console.log doesnt return anything
        // rather then logging anything, just return the count, let the caller decide what to do with it
        // if they want to log it with a particular message thats their business...
        let message = console.log(`the first counter incremented ${theCounter} times`);
        return message;
    };
    return theModule;
}(window.app.module || {}));
