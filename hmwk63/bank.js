( function(){
    'use strict';
    function bank() {
    
    let balance = 0;
   function performTransaction(transactionAmount) {
       return (this.balance + transactionAmount);
     }
     
   return {
       balance: balance,
       performTransaction: performTransaction
   };
}());
console.log(bank.performTransaction(500));
}());