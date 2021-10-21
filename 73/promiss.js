(function () {

    function doSomething(n, callback, fail) {
        setTimeout(callback(n + 1), 1000);
    }

    function doSomethingB(n, callback, fail) {
        setTimeout(callback(n + 1), 1000);
    }

    function doSomethingC(n, callback, fail) {
        setTimeout(callback(n + 1), 1000);
    }

    function onFailure(e) {
        console.error(e);
    }

    doSomething(2, r => {
        doSomethingB(r, r2 => {
            doSomethingC(r2, r3 => {
                console.log(r)
            }, onFailure);
        }, onFailure);
    }, onFailure);
}())