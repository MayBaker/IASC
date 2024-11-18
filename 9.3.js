function addNumbers() {
    // Get the values from the input fields
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    // Convert the input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Validate the input to ensure they are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").textContent = "Please enter valid numbers.";
        return;
    }

    // Add the two numbers together
    var sum = num1 + num2;

    // Output the total to the screen
    document.getElementById("output").textContent = "The total is: " + sum;
}
