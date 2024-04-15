function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.innerHTML = "Please enter valid numbers.";
      resultElement.classList.add("alert-danger");
      resultElement.classList.remove("d-none");
      return;
    }

    var result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          resultElement.innerHTML = "Division by zero is not allowed.";
          resultElement.classList.add("alert-danger");
          resultElement.classList.remove("d-none");
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultElement.innerHTML = "Invalid operation.";
        resultElement.classList.add("alert-danger");
        resultElement.classList.remove("d-none");
        return;
    }

    resultElement.innerHTML = "Result: " + result;
    resultElement.classList.remove("alert-danger");
    resultElement.classList.add("alert-success");
    resultElement.classList.remove("d-none");
  }