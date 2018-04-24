// Write your JavaScript here
var money = function(id) {
    return document.getElementById(id);
    };
  
  function Calculate() {
      var amount = money("amount-received").value - money("amount-due").value 
  
      var cents = (amount*100);
      if (isNaN (cents) || cents < 0 || cents > 99999 ) {
          alert ("Must be a number between 0 and 999.99");
          cents = 0;
      }
      money("twenty-output").innerHTML = Math.floor(cents/2000);     cents = cents % 2000;
      money("ten-output").innerHTML = Math.floor(cents/1000);     cents = cents % 1000;
      money("five-output").innerHTML = Math.floor(cents/500);     cents = cents % 500;
      money("two-output").innerHTML = Math.floor(cents/200);     cents = cents % 200;
      money("dollars-output").innerHTML = Math.floor(cents/100);     cents = cents % 100;
      money("quarters-output").innerHTML = Math.floor(cents/25);     cents = cents % 25;
      money("dimes-output").innerHTML = Math.floor(cents/10);        cents = cents % 10;
      money("nickels-output").innerHTML = Math.floor(cents/5);      
      money("pennies-output").innerHTML = Math.ceil(cents % 5);
  }
  
  
  //CLICK BUTTON
  document.getElementById('calculate-change').addEventListener('click', Calculate);