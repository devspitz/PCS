/*global pcs*/

console.log('js loaded');

(function () {
  'use strict';

  const fileNameInput = $('#fileName');
  const resultElem = $('#result');
  const htmlResultElem = $('#htmlResult');
  const spinner = $('#spinner');

  $('#load').click(() => {
    resultElem.text('');
    spinner.show();
    fetch(fileNameInput.val())
      .then(r => {
        //spinner.hide();
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.text();
      })
      .then(t => {
        //console.log(t);
        resultElem.text(t);
        htmlResultElem.html(t);
      })
      .catch(err => {
        //spinner.hide();
        //console.error(err);
        pcs.messageBox.show(err, true);
        throw new Error('OOPS!!!');
      })
      //.then(() => {
      .finally(() => {
        spinner.hide();
      });
  });
}());