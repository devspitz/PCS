const interest = (function () {
     let rate;
     let years;

  
    function setRate(theRate) {
      return rate=theRate
    }
    function setYears(numYears) {
        return years = numYears;
      }
      
    function calculate() {
      return rate * years;
    }
    return {
        calculate: calculate,
        setRate: setRate,
        setYears: setYears
    };
  }());
interest.setRate(5);
interest.setYears(3);
console.log(interest.calculate());