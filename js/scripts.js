function Account (initial,withdrawal,deposit){
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit =deposit;
}

$(document).ready(function() {
  $("form#account").submit(function(event) {
    event.preventDefault();
  })
})
