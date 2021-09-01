(function () {
    'use strict';
  
    const addContactForm = get('addContactForm');
    const contactsTable = get('contactsTable');
    const firstNameInput = get('first');
    const lastNameInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');
  
    const contacts = [];
  
    function get(id) {
      return document.getElementById(id);
    }
  
    get('addContact').addEventListener('click', () => {
      addContactForm.style.display = 'block';
    });
  
    addContactForm.addEventListener('submit', event => {
      event.preventDefault();
  
      if(!contacts.length) {
        contactsTable.deleteRow(1);
      }
  
      const newContact = {
        first: firstNameInput.value,
        last: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
      };
  
      contacts.push(newContact);
  
      const row = contactsTable.insertRow();
      const firstNameCell = row.insertCell();
      const lastNameCell = row.insertCell();
      const emailCell = row.insertCell();
      const phoneCell = row.insertCell();
      const myNewButton = document.createElement('button');
      myNewButton = row.insertCell();
      document.body.appendChild(myNewButton);
      myNewButton.addEventListener('click', ()=>{
            contactsTable.deleteRow();
      });
    
  
      firstNameCell.innerText = newContact.first;
      lastNameCell.innerText = newContact.last;
      emailCell.innerText = newContact.email;
      phoneCell.innerText = newContact.phone;

      myNewButton.innerText = 'delete';

      hideAndResetAddContactForm();
    });
  
    get('cancel').addEventListener('click', () => {
      hideAndResetAddContactForm();
    });
  
    function hideAndResetAddContactForm() {
      addContactForm.reset();
      addContactForm.style.display = 'none';
    }
   
  }());