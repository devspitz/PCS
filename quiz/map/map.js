    'use strict';
    let oldArray = [2, 3, 4];
    let newArray = []; // SL - why not put this in myMap. Always best to keep scope of things as small as possible. newArray not useful to anyone outside of myMap. It should create and return
    function myMap(array, callback) {
        for (let i = 0; i < array.length; i++) {
            let retItem = callback(array[i]);
            newArray.push(retItem);
        }
    }
    function multiply(a) {
        let ans = a *2; // SL - nothing wrong, but looks a little silly to do something so simple in two lines. Why not just return a * 2?
        return ans;

    }
    const returnedArray = myMap(oldArray, multiply);
    console.log(newArray);
    console.log(oldArray);