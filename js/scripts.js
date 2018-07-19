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
    var InputtedDeposit = $("input#dep").val();
    var newAccount = new Account(InputtedInitial, InputtedWithdrawal, InputtedDeposit);
    $("#outcome").append("<li span class ='outcome'>" + " " + newAccount + " " + "</span></li>");
    $("input#init").val("");
    $("input#with").val("");
    $("input#dep").val("");
    /*$(".initial").text(newAccount.initial);
      $(".withdrawal").text(newAccount.withdrawal);
      $(".deposit").text(newAccount.deposit);*/
  });
});
