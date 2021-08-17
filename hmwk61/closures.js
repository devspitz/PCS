"use strict";
function multiply(a, b) {
  return a * b;
}

console.log(multiply(1, 2));
console.log(multiply(3, 4));

function getMultiplier() {
    return function (a, b){
        console.log(a * b);
    };
  }

  let theMultiplier = getMultiplier();
  theMultiplier(5,6);

  function getBetterMultiplier(a) {
    return function (b){
        console.log(a * b);
    };
  }

  let theFiveMultiplier = getBetterMultiplier(5);
  theFiveMultiplier(1);
