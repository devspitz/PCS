(function () {
  'use strict';

  console.log('before fetch 1');
  fetch('people.json')
    .then(response => {
      console.log('got response 1');
      if (!response.ok) {
        //console.error(`${response.status} ${response.statusText}`);
        throw new Error(`${response.status} ${response.statusText}`);
      } //else {
      //return response.text();
      return response.json();
      //}
    })
    /*.then(text => {
      console.log(typeof text, text);
      const people = JSON.parse(text);
      console.log(typeof people, people);
    })*/
    .then(people => {
      console.log(typeof people, people);
    })
    .catch(err => console.error('OOPS, ERROR', err));

  console.log('after fetch 1');
  //////////////

  async function doTheFetch() {
    try {
      console.log('before fetch 2');
      const response = await fetch('xpeople.json');
      console.log('got response 2');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const people = await response.json();
      console.log(typeof people, people);
    } catch(e) {
      console.error('OOPS, ERROR', e);
    }
    console.log('after fetch 2');
  }
  doTheFetch();
  console.log('after fetch 22');
}());