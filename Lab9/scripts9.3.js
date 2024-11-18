function addNumbers() {


    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").textContent = "Please enter valid numbers.";
        return;
    }

    var sum = num1 + num2;

    document.getElementById("output").textContent = "The total is: " + sum;
}
