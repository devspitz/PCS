const resultElm = document.getElementById('result');
const datePick = document.getElementById('date');
let clickCount = 0;
document.getElementById('date').addEventListener('change', () => {
    resultElm.innerHTML = `you picked ${moment(datePick.value).fromNow()}, thus is your 
   number  ${++clickCount} time picking`;

});
