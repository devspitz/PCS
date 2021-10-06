(function () {
    let delay_popup = 1000;
    setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);

   
    const answer = document.getElementById('theAnswer');
    const newMessage = answer.value;

     document.getElementById("button").addEventListener('click', ()=> {
  
        getElementById('result').innerHTML = "user entered this value: " + newMessage;
        hideAndResetAddContactForm();
    });
    function hideAndResetAddContactForm() {
        addContactForm.reset();
        addContactForm.style.display = 'none';
      }
});