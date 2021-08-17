"use strict";
const testArray = ["A", "b", "C", "D"];
function myArrayFunction(array, callback) {
  for (let i = 0; i < 5; i++) {
    if (callback(array[i])){
        console.log('tru');
    }
  }
};
myArrayFunction(testArray, (letter) => letter === letter.toUpperCase());
myArrayFunction(testArray, (letter) => letter === letter.toLowerCase());
testArray.every((element) => letter === letter.toLowerCase());
