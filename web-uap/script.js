function submit() {
  var codeInput = document.getElementById("code").value;
  var amountInput = document.getElementById("amount").value;

  if (codeInput != null && amountInput != null) {
    if (codeInput == "001") {
      total = 10000 * amountInput;
      alert("Your total amount is " + total);
    } else if (codeInput == "002") {
      total = 20000 * amountInput;
      alert("Your total amount is " + total);
    } else if (codeInput == "003") {
      total = 30000 * amountInput;
      alert("Your total amount is " + total);
    }

    var userInput = confirm("Press OK to proceed or Cancel the payment");
    if (userInput != null) {
      paymentValue = window.prompt("Enter payment: ");
      if (paymentValue == total) {
        alert("Transaction successfull");
      } else if (paymentValue < total) {
        less = total - paymentValue;
        alert("Invalid payment value\n Less payment: " + less);
      } else if (paymentValue > total) {
        change = paymentValue - total;
        alert("Transaction successful!\nYour change: " + change);
      }
    } else {
      alert("You canceled the payment");
    }
  } else {
    alert("Please enter valid code / amount");
  }
}
