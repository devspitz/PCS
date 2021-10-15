    'use strict';
    let oldArray = [2, 3, 4];
    let newArray = [];
    function myMap(array, callback) {
        for (let i = 0; i < array.length; i++) {
            let retItem = callback(array[i]);
            newArray.push(retItem);
        }
    }
    function multiply(a) {
        let ans = a *2;
        return ans;

    }
    const returnedArray = myMap(oldArray, multiply);
    console.log(newArray);
    console.log(oldArray);