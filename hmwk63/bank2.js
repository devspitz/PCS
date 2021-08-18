
(function () {
  'use strict';

  function performTransaction(amount) {
    return this.balance + amount;
  }

  const bank = {
    balance: 0,
    performTransaction: function (amount) {
      this.balance + amount;
    }
  };

  console.log(bank.performTransaction(5))
});
