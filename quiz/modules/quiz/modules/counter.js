window.app = window.app || {};

window.app.module = (function (theModule) {
    'use strict';
    let theCounter = 0;

    theModule.increment = function () {
        return theCounter++;
    };
    theModule.getAmount = function () {
        let message = console.log(`the first counter incremented ${theCounter} times`);
        return message;
    };
    return theModule;
}(window.app.module || {}));
