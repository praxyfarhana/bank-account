function Account (initial,withdrawal,deposit){
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit =deposit;
}

$(document).ready(function() {
  $("form#account").submit(function(event) {
    event.preventDefault();
    var InputtedInitial = $("input#init").val();
    var InputtedWithdrawal = $("input#with").val();
    var InputtedDeposit = $("input#dep".val();
    var newAccount = new Account(InputtedInitial, InputtedWithdrawal, InputtedDeposit);
    
  })
})
