const daysOfWeek = (function () {
    const days = ['Mon', 'Tues', 'Wed'];
  
    function getDayName(index) {
      return days[index - 1];
    }
  
    function getDayNumber(dayNumber) {
      return days.findIndex(d => d.toLowerCase() === dayNumber.toLowerCase()) + 1;
    }
  
    return {
      getDayName: (index) => days[index - 1],
      getDayNumber: getDayNumber
    };
  }());
  console.log(daysOfWeek.getDayName(1));