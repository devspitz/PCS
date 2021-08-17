"use strict";
const testArray = ["A", "b", "C", "D"];
function mySome(array, callback) {
  for (let i = 0; i < 5; i++) {
    if (callback(array[i])){
        break;
    }
  }
};
mySome(testArray, (letter) => letter === letter.toUpperCase());
mySome(testArray, (letter) => letter === letter.toLowerCase());
testArray.some((element) => letter === letter.toLowerCase());



const testArray = ["A", "b", "C", "D"];
function ifEvery(array, test, action) {
  for (let i = 0; i < 5; i++) {
    if (callback(array[i])){
       action();
    }
  }
};
ifEvery(testArray, (letter) => letter === letter.toUpperCase(), console.log('passed'));
ifEvery(testArray, filter(forEach(letter === letter.toUpperCase()), console.log('passed')));